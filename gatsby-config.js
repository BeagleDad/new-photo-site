/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Matt Hoffman Photography`,
    description: `Beautiful, professional photographs for marketing real estate. Serving Prescott, Prescott Valley, and surrounding area.`,
    author: `@matthoffman`,
    siteUrl: `https://matthoffmanphoto.com/`,
  },
  // Enable this to debug SSR build issues with "gatsby develop" before deploy
  // flags: {
  //   DEV_SSR: true
  // },
  // pathPrefix is needed when not using custom domain but
  // needs to be removed for custom url; i.e. matthoffmanphoto.com
  // pathPrefix: "/new-photo-site",
  plugins: [
    `gatsby-plugin-image`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Matt Hoffman Photography`,
        short_name: `MHP`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/mh_favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
