import styled from 'styled-components'

export default function Dimmed({ click }) {
  return <DimmedWrapper onClick={click}></DimmedWrapper>
}

const DimmedWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1100;
`
