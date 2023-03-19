import React from 'react'

import styled from 'styled-components'

const path = process.env.PUBLIC_URL

export default function ListsItem({ item }) {
  console.log(item)

  return (
    <ListsItemWrapper>
      <div>
        <img
          src={`${path}/DB/assets/portfolio/${item.name}/${item.name}-main.jpg`}
        />
      </div>
      <div>{item.title}</div>
      <div>{item.status}</div>
      <div>{item.link}</div>
      <div>{item.subtitle}</div>
      <div>{item.date}</div>
      <div>{item.works}</div>
    </ListsItemWrapper>
  )
}

const ListsItemWrapper = styled.div`
  border: 1px solid #2b2b2b;
  margin-bottom: 5rem;
`
