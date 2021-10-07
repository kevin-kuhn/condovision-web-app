import React from "react"

import * as styles from "./styles.module.css"

import { Container, Text, ImageStyled, Button } from "@components"
import { WhatsAppIcon } from "@assets/icons"

const ServicesContent = ({ text, title, imagePath }) => {
	return (
		<Container>
			<div className={styles.content}>
				<div className={styles.imageBox}>
					<ImageStyled
						src={`../../../../../images/${imagePath}`}
						alt={`Representação do serviço ${title}`}
					/>
				</div>
				<div className={styles.textBox}>
					<Text>
						<div dangerouslySetInnerHTML={{ __html: text }} />
					</Text>

					<div className={styles.buttonBox}>
						<Button>
							<a
								className={styles.a}
								href={`https://api.whatsapp.com/send?text=${encodeURI(
									`Olá, gostaria de um orçamento para: ${title}.`
								)}&phone=555193300274`}
								target='_blank'
								rel='noreferrer'
							>
								Clique aqui para fazer um orçamento gratuíto!
								<WhatsAppIcon size={20} className={styles.icon}/>
							</a>
						</Button>
					</div>
				</div>
			</div>
		</Container>
	)
}

export default ServicesContent
