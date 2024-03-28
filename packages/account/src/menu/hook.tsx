import { Account } from '@citric/icons'
import { MenuProps } from '@stack-spot/portal-layout'
import { useAccountMenu } from './account'

export function useMenu(): MenuProps {
  const content = useAccountMenu()
  return {
    sections: [{ icon: <Account />, label: 'Account', active: true, content }],
    content: useAccountMenu,
    contentKey: 'account',
  }
}
