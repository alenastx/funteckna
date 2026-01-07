import { defineConfig } from 'vite'
import { resolve } from 'path';

export default defineConfig({
  base: '/funteckna/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'src/about_us.html'),
        impressum: resolve(__dirname, 'src/impressum.html'),
        datenschutz: resolve(__dirname, 'src/datenschutz.html'),
        lizenz: resolve(__dirname, 'src/lizenz.html'),
        barrierefreiheit: resolve(__dirname, 'src/barrierefreiheit.html'),
      },
    },
  },
})
