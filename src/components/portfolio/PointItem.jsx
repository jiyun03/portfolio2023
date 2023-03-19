import React from 'react'

import styled from 'styled-components'

export default function PointItem({ item }) {
  const tag = item ? item.title.tag.split('|') : ''
  console.log(item)
  return (
    <PointItemWrapper>
      <div>{item.title.title}</div>
      <div>
        {tag.length !== 0 &&
          tag.map((tags, idx) => {
            return <span>{tags}</span>
          })}
      </div>
    </PointItemWrapper>
  )
}

const PointItemWrapper = styled.div`
  border: 1px solid #2b2b2b;
  margin-bottom: 5rem;
`
