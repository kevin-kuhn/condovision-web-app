import React from "react"
import * as styles from "./styles.module.css"

import { Container, TitleSection } from "@components"
import { SERVICES } from "@constants/services"

import ServiceCard from "./service-card"

const ServicesList = () => {
	return (
		<Container>
			<TitleSection
				title='Nossos Serviços'
				subtitle='Nós disponibilizamos'
				link='/cameras'
				linkDescription='Ver todos os serviços >'
			/>
			<div className={styles.cardContainer}>
				{SERVICES.map(service => (
					<div key={service.name}>
						<ServiceCard service={service} />
					</div>
				))}
			</div>
		</Container>
	)
}

export default ServicesList
