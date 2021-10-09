import * as React from "react"

export const useDynamicImage = (data, service) => {
	const { allImageSharp: { edges } } = data

	const findInEdge = (name) => 
			edges.find(edge => edge.node.fluid.originalName === name)?.node

	const images = React.useMemo(() => {
		const bodyImage = findInEdge(service.imagePath)
		const headerImage = findInEdge(service.imageHeaderPath)

		return { bodyImage, headerImage }
	}, [service])

	return { images }
}