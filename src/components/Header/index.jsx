import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'components/Link'
import { Container } from 'components/Grid'

import Wrapper from './Wrapper'
import Title from './Title'

const Header = ({ siteTitle }) => (
  <Wrapper as="header">
    <Container maxWidth="700px">
      <Title>
        <Link to="/">{siteTitle}</Link>
      </Title>
    </Container>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export default Header
