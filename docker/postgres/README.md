# PostgreSQL Docker

## Overview

This directory contains the PostgreSQL configuration used by the Espitaleta Wellness platform.

The PostgreSQL container is responsible for storing all application data and is automatically initialized through Docker when SQL initialization scripts are available.

## Docker Image

The project uses:

- PostgreSQL 17 Alpine

## Persistent Storage

Database files are stored using a Docker volume.

```text
espitaleta_postgres_data
```

This ensures that database information is preserved even if the container is removed or recreated.

## Initialization Scripts

Database initialization scripts must be placed inside:

```text
docker/postgres/init/
```

When PostgreSQL starts for the first time, Docker automatically executes every `.sql` file found in that directory in alphabetical order.

## Environment Variables

The PostgreSQL container uses the following environment variables:

```env
POSTGRES_DB
POSTGRES_USER
POSTGRES_PASSWORD
```

These values are loaded from the project's `.env` file.

## Networking

The database is available to all containers connected to:

```text
espitaleta_network
```

Internal hostname:

```text
postgres
```

Default internal port:

```text
5432
```

## Current Status

- PostgreSQL container configured
- Persistent volume enabled
- Automatic SQL initialization supported
- Ready for backend integration