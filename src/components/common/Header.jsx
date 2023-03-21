import { useState } from 'react'
import ThemeToggle from 'components/common/ThemeToggle'
import Hamburger from 'components/common/Hamburger'
import Menu from 'components/common/Nav'

import { Link } from 'react-router-dom'

import { ReactComponent as LogoHeart } from 'assets/icon/logo_heart_2.svg'
import styled, { keyframes } from 'styled-components'

export default function Header() {
  const [menuShow, setMenuShow] = useState(false)

  return (
    <HeaderWrapper>
      <div className="header">
        <Link to="/" className="header__link">
          <span>JI</span>
          <span className="heart">
            <LogoHeart />
          </span>
          <span>YUN</span>
        </Link>
        <HeaderRight>
          <ThemeToggle />
          <Hamburger
            show={{
              menuShow: menuShow,
              setMenuShow: setMenuShow,
            }}
          />
        </HeaderRight>
        <Menu
          show={{
            menuShow: menuShow,
            setMenuShow: setMenuShow,
          }}
        />
      </div>
    </HeaderWrapper>
  )
}

const heartbeat = keyframes`
  0%   { transform: scale(1); }
  10%  { transform: scale(1.2); }
  20%  { transform: scale(1); }
  40%  { transform: scale(1); }
  47%  { transform: scale(1.2); }
  55%  { transform: scale(1); }
  62%  { transform: scale(1.2); }
  69%  { transform: scale(1); }
  100% { transform: scale(1); }
`

const HeaderWrapper = styled.header`
  position: sticky;
  top: 1.5rem;
  margin: 1.5rem;
  z-index: 1000;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 1rem;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.bgColor};
    box-shadow: ${({ theme }) => theme.headerShadow};
    &__link {
      display: inline-block;
      padding: 0.675rem 2rem;
      font-family: 'Montserrat', sans-serif;
      font-size: 1.5rem;
      font-weight: 600;
      color: ${({ theme }) => theme.textColor};
    }
  }
  .heart {
    display: inline-block;
    margin: 0 0.3rem;
    animation: ${heartbeat} 2s linear infinite alternate;
    svg {
      width: 1rem;
      height: 1rem;
    }
  }
`

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`
