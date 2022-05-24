//site metadata removed
module.exports = {
	siteMetadata: {
		// If you didn't use the resolveSiteUrl option this needs to be set
		siteUrl: `https://condovisionwebapp.gatsbyjs.io/`,
	},
	plugins: [
		"gatsby-plugin-gatsby-cloud",
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		"gatsby-plugin-postcss",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		{ resolve: `gatsby-transformer-remark` },
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
			resolve: "gatsby-plugin-robots-txt",
			options: {
				host: "https://condovisionwebapp.gatsbyjs.io",
				sitemap:
					"https://condovisionwebapp.gatsbyjs.io/sitemap/sitemap-index.xml",
				policy: [{ userAgent: "*", allow: "/" }],
			},
		},
		// {
		// 	resolve: `gatsby-plugin-sitemap`,
		// 	options: {
		// 		query: `{
    //       allSitePage {
		// 				nodes {
    //           path
    //         }
    //       }
    //     }`,
		// 		resolveSiteUrl: () => "https://condovisionwebapp.gatsbyjs.io",
		// 		resolvePages: ({ allSitePage: { nodes: allPages } }) => {
		// 			const sitePageNodeMap = allSitePage.reduce((acc, node) => {
		// 				const { uri } = node
		// 				acc[uri] = node

		// 				return acc
		// 			}, {})

		// 			return allPages.map(page => {
		// 				return { ...page, ...sitePageNodeMap[page.path] }
		// 			})
		// 		},
		// 		serialize: ({ path }) => {
		// 			let entry = {
		// 				url: path,
		// 				changefreq: "monthly",
		// 				priority: 0.7,
		// 			}
		// 			// allSitePage.nodes.map(edge => {
		// 			// 	pages.push({
		// 			// 		url: "https://condovisionwebapp.gatsbyjs.io" + edge.node.path,
		// 			// 		changefreq: `daily`,
		// 			// 		priority: 0.7,
		// 			// 	})
		// 			// })

		// 			return entry
		// 		},
		// 	},
		// },
	],
}
