import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({
  title,
  description,
  lang,
  image,
  pathname,
  isArticle,
  articleMeta,
}) {
  // eslint-disable-next-line no-use-before-define
  const { site } = useStaticQuery(query)

  const {
    buildTime,
    siteMetadata: {
      pathPrefix,
      siteUrl,
      defaultTitle,
      titleTemplate,
      defaultDescription,
      defaultImage,
      siteLanguage,
      headline,
      author,
      twitter,
    },
  } = site

  // Use global defaults whenever there's no prop
  const seo = {
    lang: lang || siteLanguage,
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${pathPrefix}${image || defaultImage}`,
    url: `${siteUrl}${pathname || ''}`,
  }

  // schema.org in JSONLD format
  // https://developers.google.com/search/docs/guides/intro-structured-data
  // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')
  // Copied from https://github.com/LeKoArts/gatsby-starter-prismic/blob/master/src/components/SEO/SEO.jsx

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: siteUrl,
    headline,
    inLanguage: siteLanguage,
    mainEntityOfPage: siteUrl,
    description: defaultDescription,
    name: defaultTitle,
    author: {
      '@type': 'Person',
      name: author,
    },
    copyrightHolder: {
      '@type': 'Person',
      name: author,
    },
    copyrightYear: '2019',
    creator: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Person',
      name: author,
    },
    datePublished: '2019-10-01T10:30:00+01:00',
    dateModified: buildTime,
    image: {
      '@type': 'ImageObject',
      url: seo.image,
    },
  }

  // Initial breadcrumb list
  const itemListElement = [
    {
      '@type': 'ListItem',
      item: {
        '@id': siteUrl,
        name: 'Homepage',
      },
      position: 1,
    },
  ]

  let schemaArticle = null
  if (isArticle) {
    schemaArticle = {
      '@context': 'http://schema.org',
      '@type': 'Article',
      author: {
        '@type': 'Person',
        name: author,
      },
      copyrightHolder: {
        '@type': 'Person',
        name: author,
      },
      copyrightYear: '2019',
      creator: {
        '@type': 'Person',
        name: author,
      },
      publisher: {
        '@type': 'Organization',
        name: author,
        logo: {
          '@type': 'ImageObject',
          url: seo.image,
        },
      },
      datePublished: articleMeta.datePublished,
      dateModified: articleMeta.dateModified,
      description: seo.description,
      headline: seo.title,
      inLanguage: siteLanguage,
      url: seo.url,
      name: seo.title,
      image: {
        '@type': 'ImageObject',
        url: seo.image,
      },
      mainEntityOfPage: seo.url,
    }
    // Push current blogpost into breadcrumb list
    itemListElement.push({
      '@type': 'ListItem',
      item: {
        '@id': seo.url,
        name: seo.title,
      },
      position: 2,
    })
  }

  const breadcrumb = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    description: 'Breadcrumbs list',
    name: 'Breadcrumbs',
    itemListElement,
  }

  return (
    <Helmet
      title={title}
      defaultTitle={seo.title}
      titleTemplate={titleTemplate}
    >
      <html lang={seo.lang} />
      <meta name="description" content={seo.description} />
      <meta name="gatsby-starter" content="Gatsby Starter Styled" />

      {/* OpenGraph tags */}
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      {twitter && <meta name="twitter:creator" content={twitter} />}

      {/* schema.org data
          Always insert breadcrumbs, but article schema only if `articleMeta` is passed
      */}
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      {!isArticle && (
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgWebPage)}
        </script>
      )}
      {isArticle &&
        articleMeta &&
        articleMeta.datePublished &&
        articleMeta.dateModified && (
          <script type="application/ld+json">
            {JSON.stringify(schemaArticle)}
          </script>
        )}
    </Helmet>
  )
}

SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  isArticle: PropTypes.bool,
  articleMeta: PropTypes.shape({
    datePublished: PropTypes.string,
    dateModified: PropTypes.string,
  }),
}

SEO.defaultProps = {
  lang: `en`,
  title: null,
  description: null,
  image: null,
  pathname: null,
  isArticle: false,
  articleMeta: null,
}

export { SEO }

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        pathPrefix
        siteUrl
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        defaultImage: image
        siteLanguage
        headline
        author
        twitter
      }
    }
  }
`
