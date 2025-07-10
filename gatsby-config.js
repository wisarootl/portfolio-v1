// change url
const siteUrl = process.env.URL || `https://wisarootl.github.io/portfolio-v1`
const current_date = new Date()

module.exports = {
  siteMetadata: {
    title: `Omega Gatsby`,
    siteUrl: siteUrl
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }
      `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          return allPages.map((page) => {
            return { ...page }
          })
        },
        serialize: ({ path }) => {
          return {
            url: path,
            lastmod: current_date
          }
        }
      }
    }
  ],
  // "change url"
  pathPrefix: `/portfolio-v1`
}
