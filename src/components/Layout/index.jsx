import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, theme } from 'util/style'

import Header from 'components/Header'
import Footer from 'components/Footer'
import { Box, Container } from 'components/Grid'

import config from '../../../config/meta'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Header siteTitle={config.siteTitle || config.siteTitleAlt} />
      <Container maxWidth="700px" px={3}>
        {children}
        <Box mt={3}>
          <Footer>
            Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </Footer>
        </Box>
      </Container>
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
