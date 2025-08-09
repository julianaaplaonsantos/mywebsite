import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Important! This tells Vite your app runs at root, not in a subfolder.
  server: {
    open: false,
  },
});
