import React from 'react'

import { Link } from '@components/Link'
import { Layout } from '@components/Layout'
import Image from '@components/Image'
import { SEO } from '@components/SEO'
import { Text } from '@components/Text'
import { Box, Br } from '@components/Grid'

const IndexPage = () => (
  <Layout>
    <SEO />
    <Text as="h2" mb={3}>
      Hi people
    </Text>
    <Text mb={4}>
      Welcome to your new Gatsby site. <Br />
      Now go build something great.
    </Text>
    <Box maxWidth="300px" mb={4}>
      <Image />
    </Box>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
