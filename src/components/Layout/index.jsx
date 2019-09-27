import React from 'react'
import PropTypes from 'prop-types'

import Header from '@components/Header'
import Footer from '@components/Footer'
import { Box } from '@components/Grid'
import { OutboundLink } from '@components/Link'
import GlobalStyles from '@style/GlobalStyles'
import { ThemeProvider, theme } from '@style'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <Header siteTitle="Gatsby Starter Styled" />
      <Box maxWidth="700px" m="0 auto" px={3}>
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
      </Box>
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Layout }
