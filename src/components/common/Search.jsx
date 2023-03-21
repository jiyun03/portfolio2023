import { useState, useRef } from 'react'

import { ReactComponent as IconSearch } from 'assets/icon/search.svg'

import styled from 'styled-components'

export default function Search({ onChange }) {
  const [inputShow, setInputShow] = useState(false)
  const input = useRef(null)

  return (
    <SearchWrapper show={inputShow}>
      <div className="search-wrap">
        <IconSearch
          onClick={() => {
            setInputShow(!inputShow)
            if (inputShow) {
              setTimeout(() => {
                input.current.focus()
              }, 100)
            }
          }}
        />
        <input
          type="text"
          placeholder="타이틀, 내용을 입력해 주세요."
          ref={input}
          onChange={onChange}
          onBlur={() => setInputShow(false)}
        />
      </div>
    </SearchWrapper>
  )
}

const SearchWrapper = styled.div`
  .search {
    &-wrap {
      display: flex;
      align-items: center;
      // width: 20rem;
      // border: ${({ theme }) => theme.borderColor};
      border-radius: 20px;
      // background-color: ${({ theme }) => theme.bgSearch};
      transition: width 0.3s;
      svg {
        margin-right: 0.5rem;
        width: 1.5rem;
        min-width: 1.5rem;
        height: 1.5rem;
        cursor: pointer;
      }
      input {
        width: 0;
        height: 2rem;
        font-size: 1rem;
        background: none;
        border: none;
        border-bottom: ${({ theme }) => theme.borderColor};
        outline: none;
        visibility: hidden;
        transition: width 0.3s, visibility 0.3s;
      }
    }
  }
  ${(props) =>
    props.show &&
    `
    .search {
      &-wrap {
        input {
          width: 14rem;
          visibility: visible;
        }
      }
    }
  `}
`
