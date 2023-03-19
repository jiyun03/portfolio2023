import styled from 'styled-components'

export default function Container({ type, children }) {
  return <ContainerWrapper type={type}>{children}</ContainerWrapper>
}

const ContainerWrapper = styled.div`
  width: 100%;
  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;
  ${(props) =>
    props.type === 'view' &&
    `
    max-width: 1000px;
  `}
`
