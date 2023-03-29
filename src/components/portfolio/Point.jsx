import { useEffect, useState } from 'react'
import Container from 'components/common/Container'

import axios from 'axios'

import styled from 'styled-components'
import PointItem from './PointItem'

const path = process.env.PUBLIC_URL

export default function Point() {
  const [points, setPoints] = useState('')

  useEffect(() => {
    axios
      .get(`${path}/DB/portfolio.json`)
      .then((json) => setPoints(json.data.point))
  }, [])

  return (
    <Container>
      <PointWrapper>
        {points.length !== 0
          ? points.map((item, idx) => {
              return <PointItem key={idx} item={item} />
            })
          : '없습니다'}
      </PointWrapper>
    </Container>
  )
}

const PointWrapper = styled.div`
  margin-top: 80rem;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px;
  > div {
    flex: 0 0 20%;
    max-width: 20%;
    padding: 0 5px;
  }
`
