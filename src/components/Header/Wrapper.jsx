import styled, { themeGet } from 'util/style'

const Wrapper = styled.div`
  background: ${themeGet('colors.primary.800')};
  padding: ${themeGet('space.3')} ${themeGet('space.3')};
  margin-bottom: ${themeGet('space.4')};
`

export default Wrapper
