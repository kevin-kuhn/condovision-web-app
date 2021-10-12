import React from "react"

import * as styles from "./styles.module.css"

import { TitleSection, Text, Container } from "@components"
import { TargetIcon, EyeIcon, ValueIcon } from "@assets/icons"

const CardAbout = ({ name, description, icon }) => (
	<article className={styles.container}>
		<h3 className={styles.title}>
			<span className={styles.icon}>{icon}</span>
			{name}
		</h3>
		<div className={styles.infos}>
			<div className={styles.text}>
				<Text>{description}</Text>
			</div>
		</div>
	</article>
)

const Company = () => {
	return (
		<Container>
			<TitleSection title='A Empresa' />
			<Text>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</Text>
			<div className={styles.cards}>
				<CardAbout
					name='Missão'
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
					icon={<TargetIcon />}
				/>
				<CardAbout
					name='Visão'
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
					icon={<EyeIcon />}
				/>
				<CardAbout
					name='Valores'
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
					icon={<ValueIcon />}
				/>
			</div>
		</Container>
	)
}

export default Company
