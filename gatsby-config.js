module.exports = {
  siteMetadata: {
    title: 'Chuck Prystupa - Full Stack Developer',
    author: 'Charles (Chuck) Prystupa',
    description: 'Portfolio Website',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-TCKY72CTFD", // Google Analytics / GA
        ],
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
