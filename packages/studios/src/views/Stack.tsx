import { Breadcrumb } from 'containers/Breadcrumb'
import { ViewPropsOf } from 'navigation'

export const Stack = ({ route, params }: ViewPropsOf<'root.studio.stacks.stack'>) => (
  <>
    <Breadcrumb />
    <p>Stack {params.stackId} of Studio {params.studioId}</p>
    <a href={route.starters.$link()}>Go to Starters</a>
    <a href={route.$parent.$link()}>Go back to Stacks</a>
  </>
)
