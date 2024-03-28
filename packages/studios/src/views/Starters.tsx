import { Breadcrumb } from 'containers/Breadcrumb'
import { ViewPropsOf } from 'navigation'

export const Starters = ({ route, params }: ViewPropsOf<'root.studio.stacks.stack.starters'>) => (
  <>
    <Breadcrumb />
    <p>Starters of Stack {params.stackId} of Studio {params.studioId}</p>
    <a href={route.starter.$link({ starterId: '1' })}>Go Starter 1</a>
    <a href={route.starter.$link({ starterId: '2' })}>Go Starter 2</a>
    <a href={route.$parent.$link()}>Go back to Stack</a>
  </>
)
