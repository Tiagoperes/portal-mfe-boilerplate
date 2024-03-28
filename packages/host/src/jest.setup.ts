 

import '@testing-library/jest-dom'
import 'jest-styled-components'
import { vi } from 'vitest'

vi.mock('network/session-manager', () => ({
  sessionManager: {
    getSession: vi.fn().mockImplementation(() => ({
      user: 'MockUser',
      token: 'MockToken',
      isExpired: () => false,
      logout: vi.fn(),
      getTokenData: vi.fn(() => ({
        account_name: 'MockAccountName',
      })),
    })),
    hasSession: vi.fn().mockReturnValue(true),
  },
}))
