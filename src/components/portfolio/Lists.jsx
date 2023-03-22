import { useEffect, useState } from 'react'
import Container from 'components/common/Container'
import Title from 'components/common/Title'
import Search from 'components/common/Search'
import ListsItem from './ListsItem'

import axios from 'axios'

import styled from 'styled-components'

const path = process.env.PUBLIC_URL

export default function Lists() {
  const defaultLimit = 6
  const [lists, setLists] = useState([])
  const [listsSort, setListsSort] = useState([])
  const [listsLimit, setListsLimit] = useState(defaultLimit)

  // [검색] input에 작성한 타이틀, 서브타이틀 검색
  const searchChange = (e) => {
    const keyword = e.target.value
    const search = lists.filter((src) => {
      return (
        src.title.toLowerCase().includes(keyword.toLowerCase()) ||
        src.subtitle.toLowerCase().includes(keyword.toLowerCase())
      )
    })
    setListsSort(search)
  }

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
        <SortWrapper>
          총 <span>{listsSort.length}</span>개
        </SortWrapper>
        <div>
          <Search onChange={searchChange} />
        </div>
      </ToolWrapper>
      <ListsWrapper>
        {listsSort.length !== 0
          ? listsSort.map((item, idx) => {
              if (idx > listsLimit - 1) return
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
