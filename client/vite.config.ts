import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default ({ mode }) => {
  return defineConfig({
    plugins: [react()],
  
    server: {
      watch: {
        usePolling: true
      },
      port: Number(process.env.CLIENT_DEV_PORT),
      host: true,
      hmr: { port: Number(process.env.CLIENT_DEV_PORT) },
    },
  });
}
