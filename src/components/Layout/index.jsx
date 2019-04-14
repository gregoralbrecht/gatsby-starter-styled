import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, theme } from 'util/style'
import GlobalStyles from 'util/style/GlobalStyles'

import Header from 'components/Header'
import Footer from 'components/Footer'
import { Box, Container } from 'components/Grid'
import { OutboundLink } from 'components/Link'

import config from '../../../config/meta'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <Header siteTitle={config.siteTitle || config.siteTitleAlt} />
      <Container maxWidth="700px" px={3}>
        {children}
        <Box mt={3}>
          <Footer>
            Built with
            {` `}
            <OutboundLink to="https://www.gatsbyjs.org" from="footer">
              Gatsby
            </OutboundLink>
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
