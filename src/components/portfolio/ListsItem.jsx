import Ratio from 'components/common/Ratio'

import { Link } from 'react-router-dom'

import styled from 'styled-components'

const path = process.env.PUBLIC_URL

export default function ListsItem({ item }) {
  return (
    <ListsItemWrapper>
      <Link to={item.link} target="_blank">
        <div className="lists__img">
          <Ratio
            ratio="3_2"
            src={`${path}/DB/assets/portfolio/${item.name}/${item.name}-main.jpg`}
          />
        </div>
        <div>{item.title}</div>
        <div>{item.status}</div>
        <div>{item.link}</div>
        <div>{item.subtitle}</div>
        <div>{item.date}</div>
        <div>{item.works}</div>
      </Link>
    </ListsItemWrapper>
  )
}

const ListsItemWrapper = styled.div`
  // border: 1px solid #2b2b2b;
  margin-bottom: 5rem;
  .lists {
    &__img {
      border-radius: 15px;
      overflow: hidden;
    }
  }
`
