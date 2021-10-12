import * as React from "react"

export const useDynamicImage = (data, imagePath, imageHeaderPath) => {
	const {
		allImageSharp: { edges },
	} = data

	const images = React.useMemo(() => {
		const findInEdge = name =>
			edges.find(edge => edge.node.fluid.originalName === name)?.node

		const bodyImage = findInEdge(imagePath) ?? {}
		const headerImage = findInEdge(imageHeaderPath) ?? {}

		return { bodyImage, headerImage }
	}, [imagePath, imageHeaderPath, edges])

	return { images }
}
