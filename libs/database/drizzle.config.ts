import { defineConfig } from 'drizzle-kit';
import { resolve } from 'path';

export default defineConfig({
  schema: resolve(__dirname, './src/lib/schema/*.ts'),
  out: resolve(__dirname, './migrations'),
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env['DATABASE_URL']!,
  },
});
