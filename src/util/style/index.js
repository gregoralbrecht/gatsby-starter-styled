import * as styledComponents from 'styled-components'
import propTypes from '@styled-system/prop-types'
import { themeGet } from '@styled-system/theme-get'
import { theme } from './theme'

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
  propTypes,
}
export * from 'styled-system'
export default styled
