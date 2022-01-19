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
						Formado Técnico em Eletrônica em 2005 pelo SENAI e com diversos
						cursos de aperfeiçoamento na área de eletrônica. São 16 anos
						contínuos atuando no ramo de manutenção, suporte técnico e vendas
						das diversas marcas do mercado. Em 2015 encontrou sua grande paixão
						profissional: a instalação de sistemas de segurança eletrônica. A
						Condovision Sistemas Eletrônicos foi criada pela paixão e pelo
						intuito de suprir uma demanda muito grande na área de sistemas de
						segurança.
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
