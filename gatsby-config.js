module.exports = {
  siteMetadata: {
    title: 'ASC',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        // baseUrl: 'staging-australiansportscamps.kinsta.cloud',
        baseUrl: 'steamlinedesign.com/qlr',
        // WP.com sites set to true, WP.org set to false
       
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: 'http',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: true,
        auth: {},
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: true,
        searchAndReplaceContentUrls: {
          sourceUrl: "http://localhost:8080",
          replacementUrl: "http://localhost:3000",
        },
      },
    },
    {
    resolve: 'gatsby-plugin-htaccess',
    options: {
        custom: `
            <IfModule mod_expires.c>
        RewriteCond %{HTTPS} off [OR]
        RewriteCond %{HTTP_HOST} !^www\. [NC]
        RewriteCond %{HTTP_HOST} ^(.*)$  [NC]
        RewriteRule (.*) https://www.%1/$1 [R=301,L]
      </IfModule>
        `,
    },
  },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      // Removes unused css rules
      resolve:'gatsby-plugin-purgecss',
      options: {
        // Activates purging in gatsby develop
        develop: true,
        // Purge only the main css file
        purgeOnly: ['/all.sass'],
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
