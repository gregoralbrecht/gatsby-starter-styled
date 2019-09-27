import React from 'react'

import { Link } from '@components/Link'
import { Layout } from '@components/Layout'
import { SEO } from '@components/SEO'
import { Box } from '@components/Grid'

const SecondPage = () => (
  <Layout>
    <SEO
      title="Page two"
      pathname="/page-2"
      description="This is page 2 of Gatsby Starter Styled"
      isArticle
      articleMeta={{ datePublished: '2018-09-12', dateModified: '2019-09-12' }}
    />
    <Box mb={3}>
      <Link to="/">Go back to the homepage</Link>
    </Box>
    <h1>High-level explanation of core Typography.js concepts</h1>
    <p>
      The goal of Typography.js is to provide a high-level elegant API for
      expressing typographic design intent.
    </p>
    <p>
      The library then generates styles appropriate to the sytem (the Web or
      React Native are the two current targets) it’s running in.
    </p>
    <ul>
      <li>
        <strong>Themes</strong> encapsulate a typography design in a javascript
        object.
      </li>
      <li>
        <strong>Plugins</strong> extend or modify the core typography engine.
        Plugins are designed so that their configuration can also be exposed in
        the design tools.
      </li>
    </ul>
    <h2>Core ideas</h2>
    <h4>Only set the base (or body) font-size/line-height</h4>
    <p>
      Only set your body font size and then derive all other font sizes from
      that.
    </p>
    <h4>Pick font sizes from a scale and then set the “scale ratio”</h4>
    <p>
      Pick other font sizes (e.g. for headers) off a scale. The{' '}
      <em>scale ratio</em>
      determines the exact font size that’s choosen. Don’t set exact header
      sizes. Instead pick where to place them on a scale. Like everything in
      Typography.js, we’re only concerned about defining the{' '}
      <em>relationship</em>
      between elements and then compiling these relationships into actual pixels
      sizes on the screen. For example in the core typography engine, the{' '}
      <code>h1</code> size is always <code>1</code> scale unit away from the
      body font size. So if the scale <em>ratio</em> is <code>2</code> and the
      base font size is <code>16px</code> the <code>h1</code>
      font size will be <code>32px</code>. If you decide to change the scale
      ratio to
      <code>2.25</code>, the h1 is now set to <code>36px</code>. When building a
      site with Typography.js, all sizes should be set using a scale value so
      all non-base-font-size text can be resized together.
    </p>
    <h4>Base all other spacings off the “rhythm” unit</h4>
    <p>
      Margins and paddings and other sizes shouldn’t generally be hand-picked.
      Hand-crafted design, like beer, doesn’t scale. All spacings need to stay
      in harmony. Picking margins/paddings by hand will cause you a world of
      hurt as it’s easy for inconsistencies to develop plus the hard-coded
      distances have to be tediously recalculated and changed if you should want
      to modify your design. Typography.js provides an alternative in the form
      of a new dynamic unit called <code>rhythm</code>. This is taken from the
      <code>line-height</code>. One <code>rhythm</code> equals one{' '}
      <code>line-height</code>. When you change your line-height, every other
      spacing in your site will respond in turn.
    </p>
    <p>
      When building a site with inline styles or css-in-js, you can import your
      typography object and use the provided rhythm function e.g.
    </p>
    <p>
      When the rhythm function is used consistently throughout your app, your
      design will remain consistent and harmonous through all design tweaks and
      changes.
    </p>
  </Layout>
)

export default SecondPage
