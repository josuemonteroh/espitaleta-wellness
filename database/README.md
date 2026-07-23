# Database

## Overview

This directory contains the database resources used by the Espitaleta Wellness platform.

It is intended to centralize the database structure, versioned migrations, initialization data and supporting SQL scripts required for the development and maintenance of the platform.

---

## Directory Structure

```text
database/
│
├── migrations/
├── schema/
├── scripts/
├── seed/
└── README.md
```

---

## Directory Description

### schema/

Contains the SQL files that define the database structure, including tables, relationships, constraints, indexes and other database objects.

### migrations/

Stores versioned database migrations used to evolve the schema over time while preserving compatibility between application versions.

### seed/

Contains initialization and sample data required to populate the database during development or testing.

### scripts/

Contains auxiliary SQL scripts for maintenance, reporting, troubleshooting or administrative tasks that are not part of the database schema.

---

## Current Status

The directory structure has been prepared for future PostgreSQL development.

Database implementation will be incorporated during the backend development phase.