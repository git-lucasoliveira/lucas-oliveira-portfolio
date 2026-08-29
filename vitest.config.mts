import { defineConfig } from 'vitest/config'
import { resolve } from 'node:path'

export default defineConfig({
  resolve: {
    // Mirrors the `@/*` alias in tsconfig.json so tests import the way the app does.
    alias: { '@': resolve(import.meta.dirname, '.') },
  },
  test: {
    environment: 'node',
    include: ['tests/**/*.test.ts'],
  },
})
