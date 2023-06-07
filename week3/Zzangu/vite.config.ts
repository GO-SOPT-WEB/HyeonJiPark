import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // If you have a tsconfig.json file, you can add its path here
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
