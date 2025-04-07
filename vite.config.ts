import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^@atlaskit\/pragmatic-drag-and-drop\/(.*)/,
        replacement:
          'node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/entry-point/$1.js',
      },
    ],
  },
});
