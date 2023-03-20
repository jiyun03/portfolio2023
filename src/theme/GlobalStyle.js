import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

// Montserrat
import MontserratWoff from 'assets/fonts/Montserrat/Montserrat-SemiBold.woff'
import MontserratWoff2 from 'assets/fonts/Montserrat/Montserrat-SemiBold.woff2'
import MontserratSvg from 'assets/fonts/Montserrat/Montserrat-SemiBold.svg'

// SaolDisplay
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

import NotoSansKRMediumWoff2 from 'assets/fonts/NotoSansKR/NotoSansKR-Medium.woff2'
import NotoSansKRMediumWoff from 'assets/fonts/NotoSansKR/NotoSansKR-Medium.woff'

import NotoSansKRBoldWoff2 from 'assets/fonts/NotoSansKR/NotoSansKR-Bold.woff2'
import NotoSansKRBoldWoff from 'assets/fonts/NotoSansKR/NotoSansKR-Bold.woff'

import NotoSansKRBlackWoff2 from 'assets/fonts/NotoSansKR/NotoSansKR-Black.woff2'
import NotoSansKRBlackWoff from 'assets/fonts/NotoSansKR/NotoSansKR-Black.woff'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  // Montserrat
  @font-face {
    font-family: 'Montserrat';
    font-weight: 600;
    src: url('${MontserratWoff2}');
    src: url('${MontserratWoff2}') format('woff2'),
        url('${MontserratWoff}') format('woff'),
        url('${MontserratSvg}#Montserrat-SemiBold') format('svg');
  }
  // SaolDisplay
  @font-face {
    font-family: 'SaolDisplay';
    font-weight: 600;
    src: url('${SaolDisplayWoff2}');
    src: url('${SaolDisplayWoff2}') format('woff2'),
        url('${SaolDisplayWoff}') format('woff'),
        url('${SaolDisplaySvg}#Montserrat-SemiBold') format('svg');
  }
  // NanumBarunGothic
  @font-face {
    font-family: 'NanumBarunGothic';
    font-weight: 400;
    src: 
        url('${NanumBarunGothicWoff2}') format('woff2'), 
        url('${NanumBarunGothicWoff}') format('woff'),
        url('${NanumBarunGothicOtf}') format('opentype');
  }
  @font-face {
    font-family: 'NanumBarunGothic';
    font-weight: 700;
    src:
        url('${NanumBarunGothicBoldWoff2}') format('woff2'), 
        url('${NanumBarunGothicBoldWoff}') format('woff'),
        url('${NanumBarunGothicBoldOtf}') format('opentype');
  }
  // NotoSansKR
  @font-face {
    font-family: 'NotoSansKR';
    font-weight: 400;
    src:
        url('${NotoSansKRWoff2}') format('woff2'), 
        url('${NotoSansKRWoff}') format('woff');
  }
  @font-face {
    font-family: 'NotoSansKR';
    font-weight: 500;
    src:
        url('${NotoSansKRMediumWoff2}') format('woff2'), 
        url('${NotoSansKRMediumWoff}') format('woff');
  }
  @font-face {
    font-family: 'NotoSansKR';
    font-weight: 700;
    src:
        url('${NotoSansKRBoldWoff2}') format('woff2'), 
        url('${NotoSansKRBoldWoff}') format('woff');
  }
  @font-face {
    font-family: 'NotoSansKR';
    font-weight: 900;
    src:
        url('${NotoSansKRBlackWoff2}') format('woff2'), 
        url('${NotoSansKRBlackWoff}') format('woff');
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
    word-break: keep-all;
    ${({ theme }) => theme.lg`
      font-size: 14px;
    `}
    ${({ theme }) => theme.md`
      font-size: 13px;
    `}
    ${({ theme }) => theme.sm`
      font-size: 13px;
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
