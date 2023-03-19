import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

// Montserrat
import MontserratEot from 'assets/fonts/Montserrat/Montserrat-SemiBold.eot'
import MontserratWoff from 'assets/fonts/Montserrat/Montserrat-SemiBold.woff'
import MontserratWoff2 from 'assets/fonts/Montserrat/Montserrat-SemiBold.woff2'
import MontserratSvg from 'assets/fonts/Montserrat/Montserrat-SemiBold.svg'

// SaolDisplay
import SaolDisplayEot from 'assets/fonts/SaolDisplay/SaolDisplay-Regular.eot'
import SaolDisplayWoff from 'assets/fonts/SaolDisplay/SaolDisplay-Regular.woff'
import SaolDisplayWoff2 from 'assets/fonts/SaolDisplay/SaolDisplay-Regular.woff2'
import SaolDisplaySvg from 'assets/fonts/SaolDisplay/SaolDisplay-Regular.svg'

// NanumBarunGothic
import NanumBarunGothicWoff2 from 'assets/fonts/NanumBarunGothic/NanumBarunGothic.woff2'
import NanumBarunGothicWoff from 'assets/fonts/NanumBarunGothic/NanumBarunGothic.woff'
import NanumBarunGothicOtf from 'assets/fonts/NanumBarunGothic/NanumBarunGothic.otf'

import NanumBarunGothicBoldWoff2 from 'assets/fonts/NanumBarunGothic/NanumBarunGothicBold.woff2'
import NanumBarunGothicBoldWoff from 'assets/fonts/NanumBarunGothic/NanumBarunGothicBold.woff'
import NanumBarunGothicBoldOtf from 'assets/fonts/NanumBarunGothic/NanumBarunGothicBold.otf'

// NotoSansKR
import NotoSansKRWoff2 from 'assets/fonts/NotoSansKR/NotoSansKR-Regular.woff2'
import NotoSansKRWoff from 'assets/fonts/NotoSansKR/NotoSansKR-Regular.woff'
import NotoSansKROtf from 'assets/fonts/NotoSansKR/NotoSansKR-Regular.otf'

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
  @font-face {
    font-family: 'NanumBarunGothic';
    font-style: normal;
    font-weight: 400;
    src: 
        url('${NanumBarunGothicWoff2}') format('woff2'), 
        url('${NanumBarunGothicWoff}') format('woff'),
        url('${NanumBarunGothicOtf}') format('opentype');
  }
  @font-face {
    font-family: 'NanumBarunGothic';
    font-style: normal;
    font-weight: 700;
    src:
        url('${NanumBarunGothicBoldWoff2}') format('woff2'), 
        url('${NanumBarunGothicBoldWoff}') format('woff'),
        url('${NanumBarunGothicBoldOtf}') format('opentype');
  }
  @font-face {
    font-family: 'NotoSansKR';
    font-style: normal;
    font-weight: 700;
    src:
        url('${NotoSansKRWoff2}') format('woff2'), 
        url('${NotoSansKRWoff}') format('woff'),
        url('${NotoSansKROtf}') format('opentype');
  }

  html,
  body {
    position: relative;
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    font-family: 'NanumBarunGothic';
    font-family: 'NotoSansKR';
    font-weight: 400;
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
