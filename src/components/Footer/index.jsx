import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@components/Grid'

const Footer = ({ children }) => (
  <Box as="footer" bg="grey.300" p={3} mb={3}>
    {children}
  </Box>
)

Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Footer
