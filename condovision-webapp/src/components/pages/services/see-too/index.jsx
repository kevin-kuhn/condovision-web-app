import React from "react"
import { Link } from "gatsby"

import * as styles from "./styles.module.css"

import { SERVICES } from "@constants/services"
import { Container, TitleSection } from "@components"

const SeeToo = ({ serviceName }) => {
	return (
		<Container>
			<TitleSection title='Consulte também' className='pb-3' />
			<ul className={styles.ul}>
				{SERVICES.filter(service => service.name !== serviceName).map(
					service => (
						<Link key={service.name} to={service.path}>
							<li className={styles.li}>{service.name}</li>
						</Link>
					)
				)}
			</ul>
		</Container>
	)
}

export default SeeToo
