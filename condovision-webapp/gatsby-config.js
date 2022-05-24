//site metadata removed
module.exports = {
	siteMetadata: {
    siteUrl: 'https://condovisionwebapp.gatsbyjs.io/'
  },
	plugins: [
		"gatsby-plugin-gatsby-cloud",
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		"gatsby-plugin-postcss",
		"gatsby-plugin-react-helmet",
		"gatsby-transformer-remark",
		"gatsby-image",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/assets/images/",
			},
			__key: "images",
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				icon: `src/assets/images/icon.jpg`,
			},
		},
		{
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://condovisionwebapp.gatsbyjs.io/',
        sitemap: 'https://condovisionwebapp.gatsbyjs.io/sitemap.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    }
	],
}
