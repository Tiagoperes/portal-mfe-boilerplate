import { Breadcrumb } from 'containers/Breadcrumb'
import { ViewPropsOf } from 'navigation'

export const Studios = ({ route, params }: ViewPropsOf<'root'>) => (
  <>
    <Breadcrumb />
    <p>Studios. like {params.like}; limit {params.limit}</p>
    <a href={route.studio.$link({ studioId: '1' })}>Go Studio 1</a>
    <a href={route.studio.$link({ studioId: '2' })}>Go Studio 2</a>
  </>
)
