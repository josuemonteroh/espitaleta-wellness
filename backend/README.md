# Backend

## Overview

This directory contains the backend source code for the Espitaleta Wellness platform.

The backend is planned to be developed using **Python** and **FastAPI**, following a modular architecture that separates configuration, business logic, data access, validation and API endpoints.

Although the backend has not yet been implemented, the project structure has been prepared to support scalable and maintainable development from the beginning.

---

## Directory Structure

```text
backend/
│
├── config/
├── controllers/
├── database/
├── docs/
├── middleware/
├── models/
├── repositories/
├── routes/
├── services/
├── tests/
├── utils/
├── validators/
└── README.md
```

---

## Directory Description

### config/

Application configuration, environment variables and general settings.

### controllers/

Handles incoming requests and coordinates the execution of business logic.

### database/

Database connection, ORM configuration and database-related resources.

### docs/

Backend documentation, API specifications and technical references.

### middleware/

Authentication, authorization, logging and request processing middleware.

### models/

Application domain models and data representations.

### repositories/

Database access layer responsible for interacting with PostgreSQL.

### routes/

REST API endpoint definitions.

### services/

Business logic and application services.

### tests/

Unit and integration tests.

### utils/

Reusable helper functions and shared utilities.

### validators/

Request validation and business rule validation.

---

## Planned Technologies

- Python
- FastAPI
- PostgreSQL
- Docker

---

## Current Status

The backend architecture has been prepared for future implementation.

Business logic, REST API endpoints, authentication and PostgreSQL integration will be developed during the next phase of the project.