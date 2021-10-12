import React from "react"
import {
	PhoneIcon,
	MailIcon,
	FacebookIcon,
	InstagramIcon,
	YoutubeIcon,
	MapPinIcon,
} from "@assets/icons"
import { Text } from "@components"

import * as styles from "./styles.module.css"

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<section className={styles.infoSection}>
				<div className={styles.infoData}>
					<span className={styles.icon}>
						<MapPinIcon size={25} />
					</span>
					<Text>SC-406, 1160 - Morro das Pedras Florianópolis</Text>
				</div>
				<a
					href='tel:+555193300274'
					aria-label='Contato por telefone'
					className={styles.infoData}
				>
					<span className={styles.icon}>
						<PhoneIcon />
					</span>
					<Text>+55 51 99330-0274</Text>
				</a>
				<a
					aria-label='Contato por email'
					href={`mailto:parizotto1987@outlook.com?subject=${encodeURI(
						"Gostaria de um orçamento!"
					)}`}
					className={styles.infoData}
				>
					<span className={styles.icon}>
						<MailIcon size={25} />
					</span>
					<Text>parizotto1987@outlook.com</Text>
				</a>
			</section>
			<section className={styles.socialSection}>
				<a
					href='https://www.facebook.com/'
					target='_blank'
					aria-label='Facebook'
					rel='noreferrer'
					className={styles.infoData}
				>
					<span className={styles.icon}>
						<FacebookIcon size={25} />{" "}
					</span>
					<span className={styles.deskInfo}>Condovision SS</span>
				</a>
				<a
					href='https://www.instagram.com/'
					target='_blank'
					aria-label='Instagram'
					rel='noreferrer'
					className={styles.infoData}
				>
					<span className={styles.icon}>
						<InstagramIcon size={25} />
					</span>{" "}
					<span className={styles.deskInfo}>Condovision SS</span>
				</a>
				<a
					href='https://www.youtube.com/'
					target='_blank'
					rel='noreferrer'
					aria-label='Youtube'
					className={styles.infoData}
				>
					<span className={styles.icon}>
						<YoutubeIcon size={25} />
					</span>
					<span className={styles.deskInfo}>Condovision SS</span>
				</a>
			</section>
		</footer>
	)
}

export default Footer
