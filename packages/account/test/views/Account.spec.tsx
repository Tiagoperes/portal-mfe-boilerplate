import { CSSToCitricAdapter } from '@stack-spot/portal-theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { root } from 'navigation'
import { beforeAll, describe, expect, it } from 'vitest'
import { Account } from 'src/views/Account'

describe('Tests of Account page', () => {
  beforeAll(() => {
    root.$go()
  })
  
  it('Should match the snapshot', () => {
    const queryClient = new QueryClient()
    const { container } = render(
      <CSSToCitricAdapter>
        <QueryClientProvider client={queryClient}>
          <Account route={root} />
        </QueryClientProvider>
      </CSSToCitricAdapter>,
    )
    expect(container).toMatchSnapshot()
  })
})
