import React from 'react'
import PropTypes from 'prop-types'

import styled, { themeGet, themePx } from 'util/style'

import { Box } from 'components/Grid'

const StyledFooter = styled(Box)`
  background: ${themeGet('colors.grey.200')};
  padding: ${themePx('space.3')};
  margin-bottom: ${themePx('space.3')};
`

const Footer = ({ children, ...props }) => (
  <StyledFooter as="footer" {...props}>
    {children}
  </StyledFooter>
)

Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Footer
