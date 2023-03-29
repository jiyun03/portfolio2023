import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

export default function Gate() {
  const menuList = [
    {
      title: 'Portfolio',
      link: 'portfolio',
    },
    {
      title: 'Point Portfolio',
      link: 'point',
    },
    {
      title: 'About',
      link: 'about',
    },
    {
      title: 'Contact',
      link: 'contact',
    },
  ]

  return (
    <GateWrapper>
      {menuList.map((menu, idx) => {
        return (
          <div key={idx} className="menu__item">
            <Link to={menu.link} className="menu__link">
              {menu.title}
            </Link>
          </div>
        )
      })}
    </GateWrapper>
  )
}

const GateWrapper = styled.div`
  margin-top: 80rem;
  text-align: center;
  z-index: 1;
  .menu {
    &__link {
      display: inline-block;
      padding: 76.8rem 24rem;
      font-family: 'SaolDisplay';
      font-size: 48rem;
      transition: transform 0.3s cubic-bezier(0.345, 0, 0, 1);
      &:hover {
        transform: skewX(-15deg);
      }
    }
  }
`
