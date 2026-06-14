import { filament } from '@filament/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { checker } from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/xdcdashboard/',
  plugins: [filament(), checker({ typescript: true }), react()],
  resolve: { tsconfigPaths: true },
});
