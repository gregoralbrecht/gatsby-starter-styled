import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@components/Grid'
import styled, { themeGet } from '@style'

const StyledFooter = styled(Box)`
  background: ${themeGet('colors.grey.200')};
  padding: ${themeGet('space.3')};
  margin-bottom: ${themeGet('space.3')};
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
