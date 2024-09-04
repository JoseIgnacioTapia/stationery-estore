This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Enviroment Variables


```bash
.env file:
POSTGRESQL_URL=

DB_USER=
DB_PASSWORD=
DB_HOST=
DB_NAME=
DB_SSL=require
DB_PORT=5432 # Por defecto, el puerto de PostgreSQL es 5432
```

## Migrate
```bash
pnpm drizzle-kit generate
```

## Run the migration script to Neon
```bash
npm run db:migrate
```
