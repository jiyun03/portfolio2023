import { animated, useTransition } from 'react-spring'

import styled from 'styled-components'

export default function FloatButton({ action, icon }) {
  const transitions = useTransition(action.action, {
    initial: {
      transform: 'scale(0)',
      opacity: 0,
    },
    from: {
      transform: 'scale(1)',
      opacity: 1,
    },
    enter: {
      transform: 'scale(1)',
      opacity: 1,
    },
    leave: {
      transform: 'scale(0)',
      opacity: 0,
    },
    reverse: true,
  })

  return (
    <FloatButtonWrapper>
      {transitions(
        (style, item) =>
          item && (
            <AnimatedSVGWrapper style={style}>
              <div className="float__icon" onClick={action.click}>
                {icon}
              </div>
            </AnimatedSVGWrapper>
          )
      )}
    </FloatButtonWrapper>
  )
}

const FloatButtonWrapper = styled.div`
  position: fixed;
  right: 25rem;
  bottom: 25rem;
  .float {
    &__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 70rem;
      height: 70rem;
      background-color: #484848;
      backdrop-filter: saturate(180%) blur(20px);
      background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.1),
        rgba(0, 0, 0, 0.1)
      );
      border-radius: 50%;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      cursor: pointer;
      z-index: 100;
    }
  }
  svg {
    width: 30rem;
    height: 30rem;
    path {
      fill: #fff;
    }
  }
`

const SVGWrapper = styled.div`
  color: ${({ theme }) => theme.textColor};
  svg {
    display: block;
  }
`

const AnimatedSVGWrapper = animated(SVGWrapper)
