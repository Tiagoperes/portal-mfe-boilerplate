import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'api-management-host',
      remotes: {
        account: "http://localhost:3001/assets/account.js",
        studios: "http://localhost:3002/assets/studios.js",
      },
      shared: [
        'react', 'react-dom', 'styled-components', '@stack-spot/auth', '@stack-spot/auth-react', '@stack-spot/citron-navigator', 
        '@stack-spot/portal-components', '@stack-spot/portal-translate', '@stack-spot/portal-theme', '@stack-spot/portal-layout', 
        '@citric/core', '@citric/icons', '@citric/ui', '@tanstack/react-query',
      ]
    }),
  ],
  resolve: {
    alias: {
      network: resolve(__dirname, './src/network'),
      components: resolve(__dirname, './src/components'),
      containers: resolve(__dirname, './src/containers'),
      hooks: resolve(__dirname, './src/hooks'),
      navigation: resolve(__dirname, './src/generated/navigation'),
      env: resolve(__dirname, './src/env'),
    },
  },
  build: {
    // we want very fast builds with very fast loading times on average, even if it means a longer first page loading time and browser restrictions.
    target: 'esnext',
    // we don't use lots of static images, but when we do, more likely than not, we reuse them, which makes inlining a bad idea.
    assetsInlineLimit: 0,
  },
})
