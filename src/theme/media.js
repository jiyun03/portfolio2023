import { css } from 'styled-components'

const sizes = {
  xs: 400,
  sm: 600,
  md: 768,
  lg: 1024,
}

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media screen and (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return acc
}, {})
