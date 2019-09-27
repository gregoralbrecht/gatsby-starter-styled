import styled, { space, color, layout, typography, propTypes } from '@style'

const Text = styled.p`
  margin: 0;
  padding: 0;
  ${space}
  ${color}
  ${layout}
  ${typography}
`

Text.displayName = `Text`

Text.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.typography,
}

export { Text }
