import { Breadcrumb } from 'containers/Breadcrumb'
import { ViewPropsOf } from 'navigation'

export const Organization = ({ route }: ViewPropsOf<'root.organization'>) => (
  <>
    <Breadcrumb />
    <p>Organization</p>
    <a href={route.$parent.$link()}>Go back to Account</a>
  </>
)
