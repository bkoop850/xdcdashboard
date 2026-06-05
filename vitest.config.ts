import { filament } from '@filament/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), filament()],
  resolve: {
    tsconfigPaths: true,
  },
  ssr: {
    noExternal: ['@filament', '@filament-icons'],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
  },
});
