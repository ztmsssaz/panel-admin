import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { UserConfigExport } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    include: ['tests/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    // testTimeout: 1000,
  },
} as UserConfigExport);
