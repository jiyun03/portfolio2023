import { useEffect, useState } from 'react'
import Container from 'components/common/Container'
import Title from 'components/common/Title'
import Search from 'components/common/Search'
import Sort from 'components/common/Sort'
import ListsItem from './ListsItem'

import axios from 'axios'

import styled from 'styled-components'

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
  const sortContents = [
    {
      name: '회사별',
      item: [
        { id: 'individual', name: '개인' },
        { id: 'dfy', name: 'Dfy' },
        { id: 'sprint', name: '스프린트' },
      ],
    },
    {
      name: '년도별',
      item: [
        { id: '2022', name: '2022' },
        { id: '2021', name: '2021' },
        { id: '2020', name: '2020' },
      ],
    },
    {
      name: '타입별',
      item: [
        { id: 'React', name: 'React' },
        { id: 'SCSS', name: 'SCSS' },
        { id: 'Firebase', name: 'Firebase' },
      ],
    },
  ]
  // 전체 리스트 배열
  const [lists, setLists] = useState([])
  // sort 된 리스트 배열 (검색, sort)
  const [listsSort, setListsSort] = useState([])
  const [listsSortSearch, setListsSortSearch] = useState('')
  // 리스트 limit 값 배열
  const [listsLimit, setListsLimit] = useState(defaultLimit)
  // sort 저장용 배열
  const [sortArray, setSortArray] = useState(sortDefault)

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
    const search =
      listsSortSearch !== ''
        ? sortDuplicates.filter((list) => {
            return (
              list.title.toLowerCase().includes(listsSortSearch) ||
              list.subtitle.toLowerCase().includes(listsSortSearch)
            )
          })
        : sortDuplicates

    if (sortFlat.length !== 0) {
      setListsSort(search)
    } else {
      setListsSort(search)
    }
  }, [sortArray, lists, listsSortSearch])

  // [더보기] 더보기 버튼
  const listsMore = () => {
    if (listsSort.length > listsLimit) {
      setListsLimit(listsLimit + 6)
    } else {
      setListsLimit(defaultLimit)
    }
  }

  useEffect(() => {
    // [리스트] 리스트 json 데이터 불러오기
    axios
      .get(`${path}/DB/portfolio.json`)
      .then((json) => setLists(json.data.portfolio))
  }, [])

  useEffect(() => {
    // [리스트] sort 된 리스트 목록 state 업데이트
    setListsSort(lists)
  }, [lists])

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
        <div className="total">
          총 <span>{listsSort.length}</span>개
        </div>
        <div className="tool">
          <SortWrapper>
            <Sort
              content={sortContents}
              sort={{
                sortDefault: sortDefault,
                sortArray: sortArray,
                setSortArray: setSortArray,
              }}
            />
          </SortWrapper>
          <Search onChange={searchChange} />
        </div>
      </ToolWrapper>
      <ListsWrapper>
        {listsSort.length !== 0
          ? listsSort.map((item, idx) => {
              if (idx > listsLimit - 1) return null
              return <ListsItem key={idx} item={item} />
            })
          : '결과가 없습니다'}
      </ListsWrapper>
      {listsSort.length > defaultLimit - 1 && (
        <ListsMore>
          <button type="button" onClick={listsMore}>
            {listsSort.length > listsLimit ? '더보기' : '접기'}
          </button>
        </ListsMore>
      )}
    </Container>
  )
}

const ToolWrapper = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding: 0 0.5rem 0 1rem;
  margin-bottom: 1rem;
  .tool {
    display: flex;
    align-items: end;
  }
`

const ListsMore = styled.div`
  margin-bottom: 5rem;
  text-align: center;
  button {
    min-width: 9rem;
    padding: 1rem 3rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.textColor};
    border: ${({ theme }) => theme.borderColor};
    border-radius: 15px;
    cursor: pointer;
  }
`

const SortWrapper = styled.div``

const ListsWrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
  > div {
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
`
