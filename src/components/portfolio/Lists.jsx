import { useEffect, useState } from 'react'
import Container from 'components/common/Container'
import ListsItem from './ListsItem'

import axios from 'axios'

import styled from 'styled-components'

const path = process.env.PUBLIC_URL

export default function Lists() {
  const [lists, setLists] = useState('')

  useEffect(() => {
    axios
      .get(`${path}/DB/portfolio.json`)
      .then((json) => setLists(json.data.portfolio))
  }, [])

  return (
    <Container>
      <ListsWrapper>
        {lists.length !== 0
          ? lists.map((item, idx) => {
              return <ListsItem key={idx} item={item} />
            })
          : '없습니다'}
      </ListsWrapper>
    </Container>
  )
}

const ListsWrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
  > div {
    flex: 0 0 33.3333%;
    max-width: 33.3333%;
    padding: 0 10px;
  }
`
