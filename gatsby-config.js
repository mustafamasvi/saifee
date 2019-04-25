const autoprefixer = require('autoprefixer');

module.exports = {
  pathPrefix: "/saifee",
  plugins: [
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [
          autoprefixer()
        ],
        precision: 8
      }
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-136346593-3"
      }
    }
  ]
}