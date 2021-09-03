import React from "react"
import { graphql } from "gatsby"

const ServicesPage = props => {
	console.log(props.data)

	return <div>Servico</div>
}

export const query = graphql`
	query ServiceQuery {
		service {
			name
			meta {
				id
			}
		}
	}
`

export default ServicesPage
