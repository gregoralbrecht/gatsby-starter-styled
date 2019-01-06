import * as styledComponents from 'styled-components'
import { themeGet, util } from 'styled-system'

import { theme } from './theme'

// Utility function to get pixel values from a unitless scale in our custom theme
const themePx = (...args) => props => util.px(themeGet(...args)(props))

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents

export {
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  theme,
  themeGet,
  themePx,
}

export default styled
