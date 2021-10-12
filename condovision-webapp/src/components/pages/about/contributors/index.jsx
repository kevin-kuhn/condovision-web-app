import React from "react"

import * as styles from "./styles.module.css"

import { TitleSection, Text, Container, ImageStyled } from "@components"

const Contributors = ({ images }) => {
	return (
		<Container>
			<TitleSection title='Nossos colaboradores' />
			<div className={styles.contributors}>
				<div className={styles.info}>
					<h2 className={styles.name}>André Parizotto</h2>
					<Text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</Text>
				</div>
				<ImageStyled
					width={56}
					height={60}
					fluid={images.bodyImage.fluid}
					alt='André Parizotto'
				/>
			</div>
		</Container>
	)
}

export default Contributors
