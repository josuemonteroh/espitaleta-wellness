# PostgreSQL Initialization Scripts

## Overview

This directory contains the SQL scripts executed automatically by PostgreSQL during the first container initialization.

Docker executes every `.sql` file found in this directory in alphabetical order.

## Recommended Structure

```text
docker/postgres/init/
│
├── 01_schema.sql
├── 02_tables.sql
├── 03_indexes.sql
├── 04_views.sql
├── 05_functions.sql
├── 06_triggers.sql
└── README.md
```

## Important Notes

- Do not include `CREATE DATABASE` statements.
- Do not use `\c` connection commands.
- The database is created automatically using the `POSTGRES_DB` environment variable.
- All scripts should assume an active connection to the application database.

## Reinitializing the Database

Initialization scripts are executed only once, when the PostgreSQL data volume is created.

To execute them again:

```bash
docker compose down -v
docker compose up --build
```

This removes the existing database volume and creates a new one from scratch.

## Current Status

This directory is prepared for future SQL initialization scripts.