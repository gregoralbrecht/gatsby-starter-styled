import styled, { themeGet, themePx } from 'util/style'

const Wrapper = styled.div`
  background: ${themeGet('colors.primary.800')};
  padding: ${themePx('space.3')} ${themePx('space.3')};
  margin-bottom: ${themePx('space.4')};
`

export default Wrapper
