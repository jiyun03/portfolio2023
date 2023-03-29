import { useState, useEffect, useRef } from 'react'

import { ReactComponent as IconSearch } from 'assets/icon/search.svg'

import styled from 'styled-components'

export default function Search({ onChange }) {
  const [inputShow, setInputShow] = useState(false)
  const input = useRef(null)

  useEffect(() => {
    if (inputShow) {
      setTimeout(() => {
        input.current.focus()
      }, 100)
    }
  }, [inputShow])

  return (
    <SearchWrapper show={inputShow}>
      <div className="search-wrap">
        <IconSearch onClick={() => setInputShow(!inputShow)} />
        <div className="search__box">
          <input
            type="text"
            placeholder="타이틀, 내용을 입력해 주세요."
            ref={input}
            onChange={onChange}
            onBlur={(e) => {
              if (e.target.value === '') {
                setInputShow(false)
              }
            }}
          />
        </div>
      </div>
    </SearchWrapper>
  )
}

const SearchWrapper = styled.div`
  margin: -16rem;
  .search {
    &-wrap {
      display: flex;
      align-items: center;
      border-radius: 20px;
      transition: width 0.3s;
      svg {
        padding: 16rem;
        width: 56rem;
        min-width: 2.8rem;
        height: 56rem;
        cursor: pointer;
        path {
          fill: ${({ theme }) => theme.textColor};
        }
      }
    }
    &__box {
      display: flex;
      align-items: center;
      width: 0;
      height: 32rem;
      background: none;
      border-bottom: ${({ theme }) => theme.borderColor};
      visibility: hidden;
      overflow: hidden;
      transition: width 0.3s, visibility 0.3s;
      input {
        width: 100%;
        height: 32rem;
        // padding-right: 32rem;
        font-size: 16rem;
        color: ${({ theme }) => theme.textColor};
        background: none;
        border: none;
        outline: none;
      }
    }
    &__empty {
      width: 32rem;
      height: 32rem;
      margin-left: -32rem;
      svg {
        padding: 8rem;
        width: 100%;
        min-width: 100%;
        height: 100%;
      }
    }
  }
  ${(props) =>
    props.show &&
    `
    .search {
      &__box {
        width: 224rem;
        margin-right: 16rem;
        visibility: visible;
      }
    }
  `}
`
