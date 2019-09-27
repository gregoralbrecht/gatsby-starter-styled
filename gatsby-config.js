const website = require('./config/website')

const pathPrefix = website.pathPrefix === `/` ? `` : website.pathPrefix

module.exports = {
  pathPrefix: website.pathPrefix,
  siteMetadata: {
    pathPrefix,
    siteUrl: website.url + pathPrefix,
    title: website.title,
    titleTemplate: website.titleTemplate,
    description: website.description,
    image: website.image,
    siteLanguage: website.siteLanguage,
    headline: website.headline,
    author: website.author,
    twitter: website.twitter,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== `production`,
        fileName: false,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `./config/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-lodash`,
      options: {
        disabledFeatures: [`shorthands`, `cloning`, `currying`],
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: website.googleAnalyticsId,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: website.title,
        short_name: website.shortName,
        description: website.description,
        start_url: `${pathPrefix}/?utm_source=a2hs`,
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: `standalone`,
        icon: website.favicon,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
