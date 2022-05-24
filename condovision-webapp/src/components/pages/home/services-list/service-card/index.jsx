import React from "react"
import { Link } from "gatsby"

import { PHONE_NUMBER } from "@constants/infos"

import * as styles from "./styles.module.css"
import { Text } from "@components"

const ServiceCard = props => {
	const { icon, name, path, shortDescription } = props.service

	return (
		<article className={styles.container}>
			<h3 className={styles.title}>
				<span className={styles.icon}>{icon}</span>
				<Link aria-label='redirecionar para outra página' to={path}>
					{name}
				</Link>
			</h3>
			<div className={styles.infos}>
				<div className={styles.text}>
					<Text>{shortDescription}</Text>
				</div>
				<div className={styles.moreActions}>
					<span className={styles.link}>
						<Link aria-label='redirecionar para outra página' to={path}>
							Saiba mais
						</Link>
					</span>
					<button className={styles.button} aria-label='orçamento'>
						<a
							className={styles.a}
							aria-label='Contato por whatsapp'
							role="button"
							href={`https://api.whatsapp.com/send?text=${encodeURI(
								`Olá, gostaria de um orçamento para: ${name}.`
							)}&phone=${PHONE_NUMBER}`}
							target='_blank'
							rel='noreferrer'
						>
							Solicite um orçamento!
						</a>
					</button>
				</div>
			</div>
		</article>
	)
}

export default ServiceCard
