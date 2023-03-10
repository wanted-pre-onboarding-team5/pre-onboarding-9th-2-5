import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/pre-onboarding-9th-2-5/',
  plugins: [react(), tsconfigPaths()],
});
