import { mergeConfig } from 'vitest/config'
import config from './vite.config'

export default mergeConfig(config, {
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./test/jest.setup.ts'],
    server: {
      deps: {
        inline: [/@stack-spot\/portal-layout.*/],
      },
    }
  },
})
