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

// AppleSDGothicNeo
import AppleSDGothicNeoTWoff2 from 'assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoT.woff2'
import AppleSDGothicNeoTWoff from 'assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoT.woff'
import AppleSDGothicNeoTTtf from 'assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoT.ttf'

import AppleSDGothicNeoLWoff2 from 'assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoL.woff2'
import AppleSDGothicNeoLWoff from 'assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoL.woff'
import AppleSDGothicNeoLTtf from 'assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoL.ttf'

import AppleSDGothicNeoMWoff2 from 'assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoM.woff2'
import AppleSDGothicNeoMWoff from 'assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoM.woff'
import AppleSDGothicNeoMTtf from 'assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoM.ttf'

import AppleSDGothicNeoSBWoff2 from 'assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoSB.woff2'
import AppleSDGothicNeoSBWoff from 'assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoSB.woff'
import AppleSDGothicNeoSBTtf from 'assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoSB.ttf'

import AppleSDGothicNeoBWoff2 from 'assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoB.woff2'
import AppleSDGothicNeoBWoff from 'assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoB.woff'
import AppleSDGothicNeoBTtf from 'assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoB.ttf'

import AppleSDGothicNeoEBWoff2 from 'assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoEB.woff2'
import AppleSDGothicNeoEBWoff from 'assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoEB.woff'
import AppleSDGothicNeoEBTtf from 'assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoEB.ttf'

import AppleSDGothicNeoHWoff2 from 'assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoH.woff2'
import AppleSDGothicNeoHWoff from 'assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoH.woff'
import AppleSDGothicNeoHTtf from 'assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoH.ttf'

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
  // AppleSDGothicNeo
  @font-face {
    font-family: 'AppleSDGothicNeo';
    font-weight: 100;
    src: 
      url('${AppleSDGothicNeoTWoff2}') format('woff2'),
      url('${AppleSDGothicNeoTWoff}') format('woff'),
      url('${AppleSDGothicNeoTTtf}') format('truetype');
  }
  @font-face {
    font-family: 'AppleSDGothicNeo';
    font-weight: 300;
    src: 
      url('${AppleSDGothicNeoLWoff2}') format('woff2'),
      url('${AppleSDGothicNeoLWoff}') format('woff'),
      url('${AppleSDGothicNeoLTtf}') format('truetype');
  }
  @font-face {
    font-family: 'AppleSDGothicNeo';
    font-weight: 400;
    src: 
      url('${AppleSDGothicNeoMWoff2}') format('woff2'),
      url('${AppleSDGothicNeoMWoff}') format('woff'),
      url('${AppleSDGothicNeoMTtf}') format('truetype');
  }
  @font-face {
    font-family: 'AppleSDGothicNeo';
    font-weight: 600;
    src: 
      url('${AppleSDGothicNeoSBWoff2}') format('woff2'),
      url('${AppleSDGothicNeoSBWoff}') format('woff'),
      url('${AppleSDGothicNeoSBTtf}') format('truetype');
  }
  @font-face {
    font-family: 'AppleSDGothicNeo';
    font-weight: 700;
    src: 
      url('${AppleSDGothicNeoBWoff2}') format('woff2'),
      url('${AppleSDGothicNeoBWoff}') format('woff'),
      url('${AppleSDGothicNeoBTtf}') format('truetype');
  }
  @font-face {
    font-family: 'AppleSDGothicNeo';
    font-weight: 800;
    src: 
      url('${AppleSDGothicNeoEBWoff2}') format('woff2'),
      url('${AppleSDGothicNeoEBWoff}') format('woff'),
      url('${AppleSDGothicNeoEBTtf}') format('truetype');
  }
  @font-face {
    font-family: 'AppleSDGothicNeo';
    font-weight: 900;
    src: 
      url('${AppleSDGothicNeoHWoff2}') format('woff2'),
      url('${AppleSDGothicNeoHWoff}') format('woff'),
      url('${AppleSDGothicNeoHTtf}') format('truetype');
  }

  html,
  body {
    position: relative;
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    font-family: 'AppleSDGothicNeo';
    font-weight: 300;
    font-size: 1px;
    line-height: 1.6;
    word-break: keep-all;
    ${({ theme }) => theme.lg`
      font-size: 0.9px;
    `}
    ${({ theme }) => theme.md`
      font-size: 0.9px;
    `}
    ${({ theme }) => theme.sm`
      font-size: 0.9px;
    `}
  }
  body {
    font-size: 16rem;
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
