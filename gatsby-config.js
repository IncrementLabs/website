module.exports = {
  plugins: [{
    resolve: 'gatsby-plugin-compile-es6-packages',
    options: {
      modules: [
        '@akiolabs/app',
        '@akiolabs/ui',
      ],
    },
  }, {
    resolve: 'gatsby-plugin-drift',
    options: {appId: process.env.DRIFT_ID},
  }, {
    resolve: 'gatsby-plugin-facebook-pixel',
    options: {pixelId: ''},
  }, {
    resolve: 'gatsby-plugin-facebook-sdk',
    options: {appId: '', cookie: true, xfbml: true, version: 'v2.12'},
  }, {
    resolve: 'gatsby-plugin-google-analytics',
    options: {trackingId: process.env.GOOGLE_ANALYTICS_ID},
  }, {
    resolve: 'gatsby-plugin-react-helmet',
  }, {
    resolve: 'gatsby-plugin-react-x',
  }],
};
