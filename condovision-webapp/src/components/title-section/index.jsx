import React from "react"
import * as styles from "./styles.module.css"
import { Link } from "gatsby"

const TitleSection = ({ title, subtitle, link, linkDescription }) => {
	return (
		<section className={styles.section}>
			<div className={styles.infoContainer}>
				{subtitle && <p className={styles.subtitle}>{subtitle}</p>}
				<h3 className={styles.title}>{title}</h3>
				<hr className={styles.hr} />
			</div>
			{link && (
				<Link to={link}>
					<p className={styles.linkDescription}>{linkDescription}</p>
				</Link>
			)}
		</section>
	)
}

export default TitleSection
