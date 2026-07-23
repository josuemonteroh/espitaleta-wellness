# Docker Infrastructure

## Overview

This directory contains the complete Docker infrastructure for the Espitaleta Wellness platform.

The current environment provides:

- Frontend served with Nginx
- PostgreSQL database
- pgAdmin database administration interface
- Prepared backend infrastructure for future FastAPI integration

> **Note:** The backend application has not been implemented yet.

---

## Project Architecture

```text
                 +--------------------+
                 |     Frontend       |
                 |      Nginx         |
                 +---------+----------+
                           |
                    HTTP Port 8090
                           |
                 +---------v----------+
                 |     Future API     |
                 |      FastAPI       |
                 +---------+----------+
                           |
                 +---------v----------+
                 |    PostgreSQL      |
                 +---------+----------+
                           |
                 +---------v----------+
                 |      pgAdmin       |
                 +--------------------+
```

---

## Services

| Service    | Description             | External Port | Internal Port |
|------------|-------------------------|---------------|---------------|
| Frontend   | Nginx web server        | `8090`        | `80`          |
| PostgreSQL | Database server         | `5434`        | `5432`        |
| pgAdmin    | Database administration | `5051`        | `80`          |

---

## Directory Structure

```text
docker/
│
├── backend/
│   ├── Dockerfile
│   └── README.md
│
├── frontend/
│   ├── Dockerfile
│   └── nginx.conf
│
├── postgres/
│   ├── init/
│   │   └── README.md
│   └── README.md
│
└── README.md
```

---

## Environment Variables

Docker reads environment variables from the `.env` file located in the project root.

Example:

```env
POSTGRES_DB=nutrition_db
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres

PGADMIN_DEFAULT_EMAIL=admin@espitaleta.com
PGADMIN_DEFAULT_PASSWORD=admin123
```

> **Important:** The `.env` file must not be committed to the repository. Developers should copy `.env.example` and create their own local `.env`.

---

## First-Time Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd espitaleta-wellness
   ```

2. **Create the environment file**

   Linux or macOS:

   ```bash
   cp .env.example .env
   ```

   Windows PowerShell:

   ```powershell
   Copy-Item .env.example .env
   ```

3. **Update the environment variables**

   Edit `.env` and define your local PostgreSQL and pgAdmin credentials.

4. **Validate the Docker configuration**

   ```bash
   docker compose config
   ```

5. **Build the images**

   ```bash
   docker compose build
   ```

6. **Start the services**

   ```bash
   docker compose up -d
   ```

7. **Verify the running containers**

   ```bash
   docker compose ps
   ```

   Expected containers:

   ```text
   espitaleta_frontend
   espitaleta_postgres
   espitaleta_pgadmin
   ```

   PostgreSQL should display a `healthy` status.

---

## Accessing the Services

### Frontend

```text
http://localhost:8090
```

### pgAdmin

```text
http://localhost:5051
```

Log in using the credentials defined in `.env`:

- `PGADMIN_DEFAULT_EMAIL`
- `PGADMIN_DEFAULT_PASSWORD`

### PostgreSQL from the Host Machine

```text
Host: localhost
Port: 5434
Database: nutrition_db
Username: value of POSTGRES_USER
Password: value of POSTGRES_PASSWORD
```

> PostgreSQL is a database server and is not accessed through a web browser.

---

## Connecting pgAdmin to PostgreSQL

1. In pgAdmin, select **Add New Server**.
2. Open the **General** tab.
3. Enter:

   ```text
   Name: Espitaleta PostgreSQL
   ```

4. Open the **Connection** tab.
5. Enter:

   ```text
   Host name/address: postgres
   Port: 5432
   Maintenance database: nutrition_db
   Username: value of POSTGRES_USER
   Password: value of POSTGRES_PASSWORD
   ```

6. Enable **Save password**.
7. Select **Save**.

Inside Docker, pgAdmin reaches PostgreSQL through the service name `postgres` on the internal port `5432`.

---

## Database Developer Workflow

Place SQL initialization scripts inside:

```text
docker/postgres/init/
```

Recommended naming convention:

```text
01_schema.sql
02_tables.sql
03_indexes.sql
04_views.sql
05_functions.sql
06_triggers.sql
07_seed.sql
```

Docker runs these scripts automatically, in alphabetical order, the first time the PostgreSQL volume is created.

### Important Rules

Initialization scripts must not include:

```sql
CREATE DATABASE database_name;
```

or:

```sql
\c database_name
```

The database is already created by Docker through the `POSTGRES_DB` variable.

### Reinitializing the Database

Initialization scripts only run when the PostgreSQL volume is created for the first time.

To reset the database and execute them again:

```bash
docker compose down -v
docker compose up -d
```

> **Warning:** This deletes all local PostgreSQL and pgAdmin persistent data.

---

## Backend Developer Workflow

The backend application has not been implemented yet.

Planned stack:

- Python
- FastAPI
- PostgreSQL

Backend code should be implemented inside:

```text
backend/
```

Connection values available inside the Docker network:

```env
DB_HOST=postgres
DB_PORT=5432
DB_NAME=nutrition_db
DB_USER=<postgres_user>
DB_PASSWORD=<postgres_password>
```

Once the backend exists, the developer must:

1. Add application files inside `backend/`.
2. Add the required Python dependencies.
3. Update `docker/backend/Dockerfile`.
4. Add the backend service to `docker-compose.yml`.
5. Rebuild the environment:

   ```bash
   docker compose build
   docker compose up -d
   ```

> The current backend Dockerfile is only a placeholder and is not an active Docker Compose service.

---

## Frontend Developer Workflow

Frontend source code is located inside:

```text
frontend/
```

After making changes, rebuild only the frontend service:

```bash
docker compose build frontend
docker compose up -d frontend
```

Then access it at:

```text
http://localhost:8090
```

> The current login interface is visual only. Authentication will work once the backend API is implemented.

---

## Common Commands

| Action | Command |
|--------|---------|
| Start all services | `docker compose up -d` |
| Stop all services | `docker compose down` |
| View service status | `docker compose ps` |
| View all logs | `docker compose logs` |
| View PostgreSQL logs | `docker logs espitaleta_postgres` |
| View pgAdmin logs | `docker logs espitaleta_pgadmin` |
| View frontend logs | `docker logs espitaleta_frontend` |
| Delete containers and volumes | `docker compose down -v` |

### Rebuild Everything

```bash
docker compose build
docker compose up -d
```

---

## Persistent Data

The environment uses the following Docker volumes:

```text
espitaleta_postgres_data
espitaleta_pgadmin_data
```

These volumes preserve PostgreSQL and pgAdmin data across container restarts and recreations.

Running the following command removes both volumes permanently:

```bash
docker compose down -v
```

---

## Troubleshooting

### Docker API Connection Error

If Docker displays an error related to:

```text
dockerDesktopLinuxEngine
```

Start Docker Desktop and wait until the Docker engine is running.

### pgAdmin Keeps Restarting

Check the logs:

```bash
docker logs espitaleta_pgadmin
```

Make sure `PGADMIN_DEFAULT_EMAIL` uses a valid domain. Avoid reserved domains such as:

```text
.local
```

### PostgreSQL Does Not Open in the Browser

This is expected. PostgreSQL is a database server, not a web application.

Use pgAdmin, DBeaver, psql or the future backend to connect.

### Frontend Login Does Not Authenticate

The backend API has not been implemented yet.

The frontend loads correctly, but authentication is unavailable until the backend is integrated.

---

## Current Status

- [x] Frontend container operational
- [x] Nginx configuration operational
- [x] PostgreSQL container operational and healthy
- [x] pgAdmin container operational
- [x] PostgreSQL database created
- [x] Docker network operational
- [x] Persistent volumes operational
- [x] Database initialization directory prepared
- [ ] Backend pending implementation