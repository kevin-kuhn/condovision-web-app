import React from "react"
import {
	PhoneIcon,
	MailIcon,
	FacebookIcon,
	InstagramIcon,
	YoutubeIcon,
	MapPinIcon,
} from "../../../assets/icons"

import * as styles from "./styles.module.css"

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<section className={styles.socialSection}>
				<a href='https://facebook' target='_blank' className={styles.infoData}>
					<FacebookIcon /> <span className={styles.deskInfo}></span>
				</a>
				<a href='https://facebook' target='_blank' className={styles.infoData}>
					<InstagramIcon /> <span className={styles.deskInfo}></span>
				</a>
				<a href='https://facebook' target='_blank' className={styles.infoData}>
					<YoutubeIcon /> <span className={styles.deskInfo}></span>
				</a>
			</section>
			<section className={styles.infoSection}>
				<div className={styles.infoData}>
					<MapPinIcon /> Avenida do André
				</div>
				<a
					href="tel:+555193300274"
					className={styles.infoData}
				>
					<PhoneIcon /> +55 51 9330-0274
				</a>
				<a
					href={`mailto:parizotto1987@outlook.com?subject=${encodeURI(
						"Gostaria de um orçamento!"
					)}`}
					className={styles.infoData}
				>
					<MailIcon /> parizotto1987@outlook.com
				</a>
			</section>
		</footer>
	)
}

export default Footer
