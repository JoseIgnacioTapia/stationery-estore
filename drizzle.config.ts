import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './server/schema.ts',
  out: './server/migrations',
  dialect: 'postgresql', // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT!) || 5432, // Puerto por defecto
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
    ssl:
      process.env.DB_SSL === 'require'
        ? { rejectUnauthorized: false }
        : undefined, // Configuración SSL
  },
});
