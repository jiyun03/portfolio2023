import Ratio from 'components/common/Ratio'

import { Link } from 'react-router-dom'

import { ReactComponent as ImgCog } from 'assets/icon/cog.svg'
import styled, { keyframes } from 'styled-components'

const path = process.env.PUBLIC_URL

export default function ListsItem({ item }) {
  const Content = () => {
    return (
      <>
        <div className="lists__img">
          <Ratio
            ratio="3_2"
            src={`${path}/DB/assets/portfolio/${item.name}/${item.name}-main.jpg`}
          />
          {item.status === 'off' && (
            <DimWrapper className="lists__dim-wrap">
              <div className="lists__dim">
                <ImgCog />
                <span className="lists__dim-title">접속불가</span>
              </div>
            </DimWrapper>
          )}
        </div>
        <div>{item.title}</div>
        <div>{item.subtitle}</div>
        <div>{item.date}</div>
        <div>{item.works}</div>
      </>
    )
  }

  return (
    <ListsItemWrapper>
      {item.status === 'on' ? (
        <Link to={item.link} target="_blank">
          <Content />
        </Link>
      ) : (
        <Content />
      )}
    </ListsItemWrapper>
  )
}

const rotateInfinite = keyframes`
  0%   { transform: rotate(0); }
  100% { transform: rotate(365deg); }
`

const ListsItemWrapper = styled.div`
  margin-bottom: 5rem;
  .lists {
    &__img {
      position: relative;
      border-radius: 15px;
      overflow: hidden;
    }
  }
`

const DimWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  .lists__dim {
    svg {
      width: 1.3vw;
      height: 1.3vw;
      vertical-align: middle;
      animation: ${rotateInfinite} 5s linear infinite;
    }
    &-title {
      display: inline-block;
      margin-left: 0.5rem;
      font-size: 1.3vw;
      color: #ffffff;
      transform: translateY(0.125rem);
    }
  }
`
