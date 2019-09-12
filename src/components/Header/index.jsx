import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'components/Link'
import { Box } from 'components/Grid'

import Wrapper from './Wrapper'
import Title from './Title'

const Header = ({ siteTitle }) => (
  <Wrapper as="header">
    <Box maxWidth="700px" m="0 auto">
      <Title>
        <Link to="/">{siteTitle}</Link>
      </Title>
    </Box>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export default Header
