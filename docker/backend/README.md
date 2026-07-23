# Backend Docker

## Overview

The backend service has not been implemented yet.

The Docker infrastructure has been designed to support a future backend implementation without requiring changes to the existing Docker environment.

## Planned Technology

The backend is planned to be developed using:

- Python
- FastAPI
- PostgreSQL

## Expected Structure

```text
backend/
│
├── main.py
├── requirements.txt
├── config/
├── controllers/
├── middleware/
├── models/
├── repositories/
├── routes/
├── services/
├── utils/
├── validators/
└── tests/
```

## Database Connection

The backend will connect to the PostgreSQL container through the Docker network.

Expected connection variables:

```env
DB_HOST=postgres
DB_PORT=5432
DB_NAME=nutrition_db
DB_USER=<postgres_user>
DB_PASSWORD=<postgres_password>
```

## Future Docker Integration

Once the backend is implemented, the Docker Compose configuration can be extended by adding a backend service that builds from:

```text
docker/backend/Dockerfile
```

No changes to the frontend, PostgreSQL or pgAdmin services will be required.

## Current Status

- Frontend container ready
- PostgreSQL container ready
- pgAdmin container ready
- Backend pending implementation