import { overlay } from '@stack-spot/portal-layout'
import { Dictionary, useTranslate } from '@stack-spot/portal-translate'
import { ViewPropsOf } from 'navigation'

const dictionary = {
  en: {
    studios: 'Go to Studios',
    account: 'Go to Account',
    alert: 'This is an alert',
    confirm: 'This is a confirm',
    panel: 'This is a right panel',
    openAlert: 'Open alert',
    openConfirm: 'Open confirm',
    showPanel: 'Show Right Panel',
  },
  pt: {
    studios: 'Ir para Studios',
    account: 'Ir para Conta',
    alert: 'Isso é um alerta',
    confirm: 'Isso é um confirm',
    panel: 'Isso é um painel',
    openAlert: 'Abrir alerta',
    openConfirm: 'Abrir confirm',
    showPanel: 'Mostrar painel à direita',
  },
} satisfies Dictionary

export const Home = ({ route }: ViewPropsOf<'root'>) => {
  const t = useTranslate(dictionary)
  return (
    <>
      <p>Home</p>
      <p>
        <a href={route.studios.$link()}>{t.studios}</a>
      </p>
      <p>
        <a href={route.account.$link()}>{t.account}</a>
      </p>
      <p>
        <button
          onClick={() =>
            overlay.alert({
              title: 'Alert',
              message: t.alert,
              showButton: false,
            })
          }
        >
          {t.openAlert}
        </button>
        <button
          onClick={async () => {
            await overlay.confirm({
              title: 'Confirm',
              message: t.confirm,
            })
          }}
        >
          {t.openConfirm}
        </button>
        <button
          onClick={async () => {
            await overlay.confirm({
              title: 'Confirm',
              message: t.confirm,
              validation: 'Test',
            })
          }}
        >
          Confirm with validation
        </button>
        <button
          onClick={() =>
            overlay.showRightPanel({
              title: 'Panel',
              subtitle: t.panel,
              children: <p>Hello World!</p>,
            })
          }
        >
          {t.showPanel}
        </button>
        <button
          onClick={() =>
            overlay.showToaster({
              message: 'A successful operation.',
              type: 'success',
            })
          }
        >
          Show success toast
        </button>
        <button
          onClick={() =>
            overlay.showToaster({
              message: 'An information.',
              autoClose: false,
            })
          }
        >
          Show persistent info toast
        </button>
        <button
          onClick={() =>
            overlay.showToaster({
              message: 'This is a warning message.',
              type: 'warning',
            })
          }
        >
          Show warning toast
        </button>
        <button
          onClick={() =>
            overlay.showToaster({
              message: 'Oops! Something went wrong!',
              type: 'error',
            })
          }
        >
          Show error toast
        </button>
      </p>
    </>
  )
}
