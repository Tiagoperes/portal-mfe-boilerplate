import { Breadcrumb } from 'containers/Breadcrumb'
import { ViewPropsOf } from 'navigation'

export const Studio = ({ route, params }: ViewPropsOf<'root.studio'>) => (
  <>
    <Breadcrumb />
    <p>Studio {params.studioId}</p>
    <a href={route.stacks.$link()}>Go to Stacks</a>
    <a href={route.$parent.$link()}>Go back to Studios</a>
  </>
)
