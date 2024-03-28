import { Breadcrumb } from 'containers/Breadcrumb'
import { ViewPropsOf } from 'navigation'

export const Stacks = ({ route, params }: ViewPropsOf<'root.studio.stacks'>) => (
  <>
    <Breadcrumb />
    <p>Stacks of Studio {params.studioId}. Tech: {params.tech?.join(', ')}</p>
    <a href={route.stack.$link({ stackId: '1' })}>Go Stack 1</a>
    <a href={route.stack.$link({ stackId: '2' })}>Go Stack 2</a>
    <a href={route.$parent.$link()}>Go back to Studio</a>
  </>
)
