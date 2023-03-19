import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import MontserratEot from 'assets/fonts/Montserrat/Montserrat-SemiBold.eot'
import MontserratWoff from 'assets/fonts/Montserrat/Montserrat-SemiBold.woff'
import MontserratWoff2 from 'assets/fonts/Montserrat/Montserrat-SemiBold.woff2'
import MontserratSvg from 'assets/fonts/Montserrat/Montserrat-SemiBold.svg'
import SaolDisplayEot from 'assets/fonts/SaolDisplay/SaolDisplay-Regular.eot'
import SaolDisplayWoff from 'assets/fonts/SaolDisplay/SaolDisplay-Regular.woff'
import SaolDisplayWoff2 from 'assets/fonts/SaolDisplay/SaolDisplay-Regular.woff2'
import SaolDisplaySvg from 'assets/fonts/SaolDisplay/SaolDisplay-Regular.svg'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'Montserrat';
    src: url('${MontserratEot}');
    src: url('${MontserratEot}?#iefix') format('embedded-opentype'),
        url('${MontserratWoff2}') format('woff2'),
        url('${MontserratWoff}') format('woff'),
        url('${MontserratSvg}#Montserrat-SemiBold') format('svg');
    font-weight: 600;
  }
  @font-face {
    font-family: 'SaolDisplay';
    src: url('${SaolDisplayEot}');
    src: url('${SaolDisplayEot}?#iefix') format('embedded-opentype'),
        url('${SaolDisplayWoff2}') format('woff2'),
        url('${SaolDisplayWoff}') format('woff'),
        url('${SaolDisplaySvg}#Montserrat-SemiBold') format('svg');
    font-weight: 600;
  }

  html,
  body {
    position: relative;
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    font-size: 16px;
    line-height: 1.6;
    word-break: break-word;
    ${({ theme }) => theme.lg`
      font-size: 13px;
    `}
    ${({ theme }) => theme.md`
      font-size: 12px;
    `}
    ${({ theme }) => theme.sm`
      font-size: 11px;
    `}
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  a {
    color: ${({ theme }) => theme.textColor};
    text-decoration: none;
  }
  button {
    background: none;
    border: none;
  }
`
