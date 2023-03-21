import styled from 'styled-components'

export default function Title({ content }) {
  return (
    <TitleWrapper>
      <div className="title__title">{content.title}</div>
      <div className="title__subtitle">{content.subtitle}</div>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
  margin-bottom: 3rem;
  // text-align: center;
  .title {
    &__title {
      font-size: 3rem;
      font-weight: 700;
    }
    &__subtitle {
      font-size: 1.2rem;
    }
  }
`
