import { CSSToCitricAdapter } from '@stack-spot/portal-theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { root } from 'navigation'
import { beforeAll, describe, expect, it } from 'vitest'
import { Studio } from 'src/views/Studio'

describe('Tests of Studio page', () => {
  const studioId = '1'

  beforeAll(() => {
    root.studio.$go({ studioId })
  })

  it('Should match the snapshot', () => {
    const queryClient = new QueryClient()
    const { container } = render(
      <CSSToCitricAdapter>
        <QueryClientProvider client={queryClient}>
          <Studio route={root.studio} params={{ studioId }} />
        </QueryClientProvider>
      </CSSToCitricAdapter>,
    )
    expect(container).toMatchSnapshot()
  })
})
