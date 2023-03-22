import Ratio from 'components/common/Ratio'

import { Link } from 'react-router-dom'

import { ReactComponent as ImgCog } from 'assets/icon/cog.svg'
import styled, { keyframes } from 'styled-components'

const path = process.env.PUBLIC_URL

export default function ListsItem({ item }) {
  const Content = () => {
    const types = item.type.split('|')
    const contents = [
      {
        name: '기간',
        content: item.date,
      },
      {
        name: '작업도',
        content: item.works,
      },
      {
        name: '기술스택',
        class: 'type',
        content: types.map((type, idx) => {
          return <span key={idx}>#{type}</span>
        }),
      },
    ]

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
        <div className="lists__title-wrap">
          <div className="lists__title">{item.title}</div>
          <div className="lists__subtitle">{item.subtitle}</div>
        </div>
        <div className="lists__content-wrap">
          {contents.map((content, idx) => {
            return (
              <div key={idx} className="lists__content">
                <div className="lists__content-item lists__content-item--title">
                  {content.name}
                </div>
                <div
                  className={`lists__content-item lists__content-item--content ${
                    content.class ? `lists__content-item--${content.class}` : ''
                  }`}
                >
                  {content.content}
                </div>
              </div>
            )
          })}
        </div>
      </>
    )
  }

  return (
    <ListsItemWrapper>
      {item.status === 'on' ? (
        <Link to={item.link} target="_blank" className="lists__link">
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
    &__link {
      display: block;
      transition: transform 0.3s;
      &:hover {
        transform: translateY(-10px);
        .lists__img {
          box-shadow: ${({ theme }) => theme.listsShadow};
        }
      }
    }
    &__img {
      position: relative;
      border-radius: 15px;
      overflow: hidden;
      transition: box-shadow 0.3s;
    }
    &__title {
      font-size: 1.25rem;
      font-weight: 700;
      &-wrap {
        margin-top: 1.25rem;
      }
    }
    &__subtitle {
      margin-top: 0.625rem;
      font-size: 1rem;
      color: ${({ theme }) => theme.textColor2};
      line-height: 1.5;
    }
    &__content {
      display: flex;
      &-item {
        &--title {
          font-weight: 700;
          width: 6rem;
          max-width: 6rem;
        }
        &--type {
          span {
            display: inline-block;
            margin-right: 0.5rem;
            padding: 0.2rem 0.5rem 0.3rem;
            font-size: 0.75rem;
            line-height: 1;
            color: ${({ theme }) => theme.textColor2};
            background: ${({ theme }) => theme.bgType};
            border-radius: 15px;
          }
        }
        &:not(:last-child) {
          margin-bottom: 0.2rem;
        }
      }
      &-wrap {
        margin-top: 1rem;
      }
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
      width: 1.2rem;
      height: 1.2rem;
      vertical-align: middle;
      animation: ${rotateInfinite} 5s linear infinite;
      ${({ theme }) => theme.lg`
        width: 2vw;
        height: 2vw;
      `}
      ${({ theme }) => theme.sm`
        width: 5vw;
        height: 5vw;
      `}
    }
    &-title {
      display: inline-block;
      margin-left: 0.5rem;
      font-size: 1.2rem;
      color: #ffffff;
      vertical-align: middle;
      ${({ theme }) => theme.lg`
        font-size: 2vw;
      `}
      ${({ theme }) => theme.sm`
        font-size: 5vw;
      `}
    }
  }
`
