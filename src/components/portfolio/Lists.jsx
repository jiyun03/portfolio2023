import { useEffect, useState, useRef } from 'react'
import Container from 'components/common/Container'
import Title from 'components/common/Title'
import Search from 'components/common/Search'
import Sort from 'components/common/Sort'
import FloatButton from 'components/common/FloatButton'
import ListsItem from './ListsItem'
import Portal from 'components/common/Portal'

import axios from 'axios'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

import { ReactComponent as ImgButtonMore } from 'assets/icon/button_more.svg'
import { ReactComponent as ImgSearchNone } from 'assets/icon/search_none.svg'
import { ReactComponent as ImgLoading } from 'assets/icon/loading.svg'
import { ReactComponent as ImgFilter } from 'assets/icon/filter.svg'
import { ReactComponent as ImgSortClose } from 'assets/icon/sort_close.svg'

import styled, { keyframes } from 'styled-components'

const path = process.env.PUBLIC_URL

export default function Lists() {
  const defaultLimit = 6
  const sortDefault = [
    {
      id: 'company',
      item: [],
    },
    {
      id: 'year',
      item: [],
    },
    {
      id: 'type',
      item: [],
    },
  ]
  // 전체 리스트
  const [lists, setLists] = useState([])
  const [listsLoading, setListsLoading] = useState(true)
  // sort 된 리스트 배열 (검색, sort)
  const [listsSort, setListsSort] = useState([])
  const [listsSortSearch, setListsSortSearch] = useState('')
  const [listsSortYear, setListsSortYear] = useState([])
  const [listsSortType, setListsSortType] = useState([])
  // 리스트 limit 값 배열
  const [listsLimit, setListsLimit] = useState(defaultLimit)
  // sort 저장용 배열
  const [sortArray, setSortArray] = useState(sortDefault)
  const sortContents = [
    {
      name: '회사별',
      item: [
        { id: 'individual', name: '개인' },
        { id: 'dfy', name: 'DFY' },
        { id: 'sprint', name: '스프린트' },
      ],
    },
    {
      name: '연도별',
      item: listsSortYear,
    },
    {
      name: '타입별',
      item: listsSortType,
    },
  ]
  // float
  const floatRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const [float, setFloat] = useState(false)
  const [floatClick, setFloatClick] = useState(false)

  // [더보기] 더보기 버튼
  const listsMore = () => {
    if (listsSort.length > listsLimit) {
      setListsLimit(listsLimit + 6)
    } else {
      setListsLimit(defaultLimit)
    }
  }

  // 검색어 state 저장
  const searchChange = (e) => {
    const keyword = e.target.value.toLowerCase()
    setListsSortSearch(keyword)
  }

  useEffect(() => {
    // sort 리스트
    const sortLists = sortArray.reduce((acc, sort) => {
      const item = sort.item
      const filteredLists = lists.filter((list) => {
        const date = list.date.split('.')[0]
        const type = list.type.split('|')

        return (
          item.includes(list.company) ||
          item.includes(date) ||
          item.filter((x) => type.includes(x)).length !== 0
        )
      })
      return [...acc, filteredLists]
    }, [])

    const sortFlat = sortLists.flat()

    // sort id 별 개수 체크
    const sortCountCheck = () => {
      let count = 0
      for (let index = 0; index < sortLists.length; index++) {
        if (sortLists[index].length > 0) count++
      }
      return count
    }

    // [리팩토링] sort 중복 검수 리팩토링 필요
    const sortDuplicatesFind =
      sortCountCheck() > 1
        ? sortFlat
            .filter((item, index) => {
              return sortFlat.indexOf(item) !== index
            })
            .sort((a, b) => new Date(b.date) - new Date(a.date))
        : sortFlat

    const sortDuplicates =
      sortCountCheck() > 2
        ? sortDuplicatesFind.filter((item, index) => {
            return sortDuplicatesFind.indexOf(item) !== index
          })
        : sortDuplicatesFind

    // [검색] input에 작성한 타이틀, 서브타이틀 검색
    const searchLists = sortFlat.length === 0 ? lists : sortDuplicates
    const search =
      listsSortSearch !== ''
        ? searchLists.filter((list) => {
            return (
              list.title.toLowerCase().includes(listsSortSearch) ||
              list.subtitle.toLowerCase().includes(listsSortSearch)
            )
          })
        : searchLists

    setListsSort(search)
    setListsLimit(defaultLimit)
  }, [sortArray, lists, listsSortSearch])

  useEffect(() => {
    // [리스트] sort 된 리스트 목록 state 업데이트
    setListsSort(lists)

    if (lists.length !== 0) {
      // 연도, 타입 설정
      const yearsMap = new Map()
      const typesMap = new Map()

      lists.forEach((item) => {
        const year = item.date.split('.')[0]
        const type = item.type.split('|')
        yearsMap.set(year, { id: year, name: `${year}년` })
        type.forEach((itemType) => {
          typesMap.set(itemType, { id: itemType, name: itemType })
        })
      })

      setListsSortYear([...yearsMap.values()])
      setListsSortType([...typesMap.values()])
    }
  }, [lists])

  // [float] scroll
  let floatHeight
  let floatBottom
  const floatScroll = () => {
    if (window.scrollY > floatBottom + 25) {
      setFloat(true)
    } else {
      setFloat(false)
      setFloatClick(false)
    }
  }

  const floatClickState = () => {
    setFloatClick(!floatClick)
  }

  // [resize]
  const resizeSetting = () => {
    // view 설정
    if (window.innerWidth <= 600) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }

    // float
    setFloatClick(false)
    floatHeight = floatRef.current.firstElementChild.offsetHeight
    floatBottom = floatRef.current.offsetTop + floatHeight
    floatRef.current.style.height = `${floatHeight}px`
  }

  useEffect(() => {
    // [리스트] 리스트 json 데이터 불러오기
    const dataFetch = async () => {
      await axios
        .get(`${path}/DB/portfolio.json`)
        .then((json) => setLists(json.data.portfolio))
      await setListsLoading(false)
    }
    dataFetch()

    // [float] scroll, resize
    setTimeout(() => {
      resizeSetting()
    }, 500)
    window.addEventListener('scroll', floatScroll)
    window.addEventListener('resize', resizeSetting)
    return () => {
      window.removeEventListener('scroll', floatScroll)
      window.removeEventListener('resize', resizeSetting)
    }
  }, [])

  useEffect(() => {
    if (floatClick && floatRef.current) {
      floatRef.current.classList.add('active')
    } else {
      floatRef.current.classList.remove('active')
    }

    // scrollLock
    if (isMobile && floatClick) {
      disableBodyScroll(floatRef.current)
    } else {
      enableBodyScroll(floatRef.current)
    }
  }, [floatClick, isMobile])

  return (
    <Container>
      <Title
        content={{
          title: '프로젝트 목록',
          subtitle: (
            <>
              재직중 작업한 프로젝트 목록입니다.
              <br />
              모든 사이트는 반응형으로 제작되었습니다 :)
            </>
          ),
        }}
      />
      <ToolWrapper>
        <div className="tool-wrap" ref={floatRef}>
          <div className="tool">
            {floatClick && (
              <div className="tool__close" onClick={floatClickState}>
                <ImgSortClose />
              </div>
            )}
            <div className="tool__title-wrap">
              <div className="tool__title">정렬</div>
              <Search onChange={searchChange} />
            </div>
            <Sort
              content={sortContents}
              sort={{
                sortDefault: sortDefault,
                sortArray: sortArray,
                setSortArray: setSortArray,
              }}
            />
          </div>
        </div>
        <div className="total">
          총 <span className="total__num">{listsSort.length}</span>개
        </div>
      </ToolWrapper>
      <ListsWrapper>
        <div className="lists">
          {!listsLoading ? (
            listsSort.length !== 0 ? (
              <div className="lists-wrap">
                {listsSort.map((item, idx) => {
                  if (idx > listsLimit - 1) return null
                  return <ListsItem key={idx} item={item} />
                })}
              </div>
            ) : (
              <SearchNone>
                <div className="search-none__icon">
                  <ImgSearchNone />
                </div>
                <div className="search-none__title">검색 결과가 없습니다.</div>
              </SearchNone>
            )
          ) : (
            <div className="lists__none">
              <ImgLoading />
            </div>
          )}
        </div>
        {listsSort.length > defaultLimit - 1 &&
          listsSort.length > listsLimit && (
            <ListsMore>
              <button type="button" className="more__btn" onClick={listsMore}>
                <ImgButtonMore /> <span className="more__title">더보기</span>
              </button>
            </ListsMore>
          )}
      </ListsWrapper>
      <FloatButton
        icon={<ImgFilter />}
        action={{
          action: float,
          click: floatClickState,
        }}
      />
      {isMobile && floatClick && <Portal dimmed={floatClickState} />}
    </Container>
  )
}

const bounceUp = keyframes`
  0%   { opacity:0; transform: translate(-50%, 100%); }
  30%  { transform: translate(-50%, -10%); }
  60%  { opacity:1; transform: translate(-50%, 10%); }
  100% { transform: translate(-50%, 0); }
`

const showUp = keyframes`
  0%   { transform: translate(-50%, 100%); }
  100% { transform: translate(-50%, 0); }
`

const ToolWrapper = styled.div`
  margin-bottom: 16rem;
  .tool {
    position: relative;
    padding: 25rem;
    font-size: 16rem;
    background-color: ${({ theme }) => theme.bgSort};
    border-radius: 20px;
    &-wrap {
      position: relative;
      &:not(.active) {
        height: auto !important;
      }
      &.active {
        .tool {
          position: fixed;
          bottom: 20rem;
          left: 50%;
          width: 50%;
          border: ${({ theme }) => theme.borderColor};
          transform: translate(-50%, 0);
          animation: ${bounceUp} 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
          z-index: 1200;
          ${({ theme }) => theme.lg`
            width: 70%;
          `}
          ${({ theme }) => theme.sm`
            bottom: 0;
            width: 100%;
            background-color: ${theme.bgSortSm};
            border-radius: 20px 20px 0 0;
            border: none;
            box-shadow: 0 -10px 20px rgba(0,0,0,0.15);
            animation: ${showUp} 0.3s;
            .sort {
              overflow-y:scroll;
              max-height: 25vh;
            }
            &__close {
              left: initial;
              right: 20rem;
              top: 20rem;
            }
          `}
        }
      }
    }
    &__title {
      font-weight: 700;
      &-wrap {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15rem;
        ${({ theme }) => theme.sm`
          display: block;
        `}
      }
    }
    &__close {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: -10rem;
      top: -15rem;
      width: 40rem;
      height: 40rem;
      padding: 12rem;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.btnDark};
      cursor: pointer;
      svg {
        path {
          fill: #fff;
        }
      }
    }
  }
  .total {
    margin-top: 16rem;
    padding: 0 8rem 0 16rem;
    font-weight: 600;
    &__num {
      color: ${({ theme }) => theme.pointColor};
    }
  }
`

const ListsMore = styled.div`
  text-align: center;
  margin-top: -50rem;
  svg,
  .more__title {
    padding: 2rem 0;
    vertical-align: bottom;
  }
  .more {
    &__btn {
      padding: 20rem 48rem;
      font-size: 16rem;
      color: ${({ theme }) => theme.textColor};
      border-radius: 10px;
      cursor: pointer;
      svg {
        display: inline-block;
        width: 23rem;
        margin-right: 5rem;
        transition: transform 0.4s;
        path {
          fill: ${({ theme }) => theme.textColor};
        }
      }
      &:hover {
        svg {
          transform: rotate(180deg);
        }
        .more__title {
          &:before {
            width: 100%;
            transform: translateX(100%);
            transition: width 0.3s ease-in-out, transform 0.3s ease-in-out 0.3s;
          }
        }
      }
    }
    &__title {
      display: inline-block;
      position: relative;
      overflow: hidden;
      &:before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 2rem;
        background-color: ${({ theme }) => theme.textColor};
      }
    }
  }
`

const ListsWrapper = styled.div`
  margin-bottom: 70rem;
  ${({ theme }) => theme.sm`
    margin-bottom: 40rem;
  `}
  .lists {
    &-wrap {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -10px;
    }
    &__item {
      flex: 0 0 33.3333%;
      max-width: 33.3333%;
      padding: 0 10px;
      ${({ theme }) => theme.lg`
        flex: 0 0 50%;
        max-width: 50%;
      `}
      ${({ theme }) => theme.sm`
        flex: 0 0 100%;
        max-width: 100%;
      `}
    }
    &__none {
      svg {
        display: block;
        width: 110rem;
        margin: auto;
      }
    }
  }
`

const SearchNone = styled.div`
  margin-top: 50rem;
  text-align: center;
  .search-none {
    &__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 130rem;
      height: 130rem;
      margin: auto;
      padding: 45rem;
      background: ${({ theme }) => theme.bgSearchNone};
      border-radius: 50%;
      ${({ theme }) => theme.sm`
        width: 100rem;
        height: 100rem;
        padding: 30rem;
      `}
      svg {
        width: 50rem;
        height: 50rem;
      }
    }
    &__title {
      margin-top: 10rem;
      font-size: 20rem;
      font-weight: 600;
    }
  }
`
