import React from 'react'
import { Link } from 'gatsby'

import { Layout } from '@components/Layout'
import { SEO } from '@components/SEO'
import { Text } from '@components/Text'
import { Br } from '@components/Grid'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 — Not found" />
    <Text as="h2" mb={3}>
      Not found
    </Text>
    <Text>
      You just hit a route that doesn&#39;t exist... the sadness.
      <Br />
      <Link to="/">Take me home.</Link>
    </Text>
  </Layout>
)

export default NotFoundPage
