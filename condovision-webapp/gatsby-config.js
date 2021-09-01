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
		"gatsby-plugin-ts",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
	],
}
