import { useTheme } from 'context/themeProvider'
import { animated, useTransition } from 'react-spring'

import { ReactComponent as IconThemeDark } from 'assets/icon/theme_dark.svg'
import { ReactComponent as IconThemeLight } from 'assets/icon/theme_light.svg'
import styled from 'styled-components'

export default function ThemeToggle() {
  const [themeMode, toggleTheme] = useTheme()
  const isDark = themeMode === 'dark'
  const transitions = useTransition(isDark, {
    initial: {
      transform: 'scale(1) rotate(0deg)',
      opacity: 1,
    },
    from: {
      transform: 'scale(0) rotate(-180deg)',
      opacity: 0,
    },
    enter: {
      transform: 'scale(1) rotate(0deg)',
      opacity: 1,
    },
    leave: {
      transform: 'scale(0) rotate(180deg)',
      opacity: 0,
    },
    reverse: true,
  })

  return (
    <ToggleWrapper>
      <ToggleButton onClick={toggleTheme} mode={themeMode}>
        {transitions((style, item) =>
          item ? (
            <Positioner>
              <AnimatedSVGWrapper style={style}>
                <IconThemeDark />
              </AnimatedSVGWrapper>
            </Positioner>
          ) : (
            <Positioner>
              <AnimatedSVGWrapper style={style}>
                <IconThemeLight />
              </AnimatedSVGWrapper>
            </Positioner>
          )
        )}
      </ToggleButton>
    </ToggleWrapper>
  )
}

const ToggleWrapper = styled.div`
  background: none;
`

const ToggleButton = styled.div`
  position: relative;
  padding: 0.8rem;
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  box-sizing: content-box;
  cursor: pointer;
  z-index: 1000;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.headerHover};
  }
  svg {
    display: block;
    width: 1.3rem;
    height: 1.3rem;
  }
`

const Positioner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const SVGWrapper = styled.div`
  color: ${({ theme }) => theme.textColor};
  svg {
    display: block;
  }
`

const AnimatedSVGWrapper = animated(SVGWrapper)
