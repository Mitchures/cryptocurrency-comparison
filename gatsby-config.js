module.exports = {
  siteMetadata: {
    title: `Cryptocurrency Comparison`,
    description: `View current cryptocurrency prices.`,
    author: `Mitchell Hollander`,
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
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/btc.png`
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-apiserver`,
      options: {
        url: process.env.API_URL,
        method: `get`,
        headers: {
          'X-CMC_PRO_API_KEY': process.env.API_KEY
        },
        name: `crypto`,
        schemaType: `array`,
      }
    }
  ],
}
