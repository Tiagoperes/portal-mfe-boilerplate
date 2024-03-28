import { mergeConfig } from 'vitest/config'
import config from './vite.config'

export default mergeConfig(config, {
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/jest.setup.ts'],
  },
})
