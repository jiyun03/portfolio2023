import Container from 'components/common/Container'
import Title from 'components/common/Title'
import Gallery from 'components/about/Gallery'

import styled from 'styled-components'

const path = process.env.PUBLIC_URL

export default function About() {
  const galleryArray = [
    `${path}/DB/assets/portfolio/animal/animal-main.jpg`,
    `${path}/DB/assets/portfolio/andone/andone-main.jpg`,
    `${path}/DB/assets/portfolio/animal/animal-main.jpg`,
    `${path}/DB/assets/portfolio/animal/animal-main.jpg`,
  ]

  return (
    <Container type="view">
      <Title
        content={{
          title: 'About',
          subtitle: '저에 대해 알려드릴게요 :)',
        }}
      />
      <Gallery img={galleryArray} />
      <TitleWrapper>
        <div>👋 안녕하세요! 입니다.</div>
      </TitleWrapper>
      <div></div>
    </Container>
  )
}

const TitleWrapper = styled.div`
  font-size: 30rem;
  font-weight: 600;
`
