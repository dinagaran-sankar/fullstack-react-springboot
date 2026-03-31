import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // to change the server port default port no 
  // server:{
  //   port: 5600
  // },
})
