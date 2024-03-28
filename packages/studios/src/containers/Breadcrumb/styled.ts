import { getFontAppearance } from '@citric/core/dist/utils/theme'
import { theme } from '@stack-spot/portal-theme'
import styled from 'styled-components' // Corrigido: 'styled' importado corretamente

export const Box = styled.nav`
  margin-bottom: 24px;

  ul {
    display: flex;
    flex-direction: row;
  }

  li {
    display: flex;
    flex-direction: row;

    &:before {
      content: '/';
      font: ${({ theme: styledTheme }) =>
        getFontAppearance(styledTheme as any, 'breadcrumb') as any};
      margin: 0 10px;
      color: ${theme.color.light['700']};
    }

    &:first-child:before {
      content: none;
    }
  }

  a {
    color: ${theme.color.light['700']};
    &:hover {
      text-decoration: underline;
      color: ${theme.color.light.contrastText};
    }
  }
`
