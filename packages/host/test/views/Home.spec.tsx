import { CSSToCitricAdapter } from '@stack-spot/portal-theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { root } from 'navigation'
import { describe, expect, it } from 'vitest'
import { Home } from 'src/views/Home'

describe('Tests of Home page', () => {
  it('Should match the snapshot', () => {
    const queryClient = new QueryClient()
    const { container } = render(
      <CSSToCitricAdapter>
        <QueryClientProvider client={queryClient}>
          <Home route={root} />
        </QueryClientProvider>
      </CSSToCitricAdapter>,
    )
    expect(container).toMatchSnapshot()
  })
})
