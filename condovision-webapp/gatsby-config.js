module.exports = {
	siteMetadata: {
		siteUrl: "https://www.yourdomain.tld",
		title: "condovision-webapp",
	},
	plugins: [
		"gatsby-plugin-gatsby-cloud",
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		"gatsby-plugin-postcss",
		"gatsby-plugin-react-helmet",
		"gatsby-transformer-remark",
		{
      resolve: `gatsby-transformer-yaml`,
      options: {
        // Conditionally set the typeName so that we both use a lowercased and capitalized type name
        typeName: ({ node }) => {
          const name = node.sourceInstanceName

          if (name === `services`) {
            return `Service`
          }

          return name
        },
      },
    },
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/services`,
				name: `services`,
			},
		},
	],
}
