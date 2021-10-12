import React from "react"
import * as styles from "./styles.module.css"
import { Link } from "gatsby"

const TitleSection = ({
	title,
	subtitle,
	link,
	linkDescription,
	className,
}) => {
	return (
		<section className={`${styles.section} ${className ?? ""}`}>
			<div className={styles.infoContainer}>
				{subtitle && <p className={styles.subtitle}>{subtitle}</p>}
				<h3 className={styles.title}>{title}</h3>
				<hr className={styles.hr} />
			</div>
			{link && (
				<Link to={link} className={styles.linkDescription}>
					{linkDescription}
				</Link>
			)}
		</section>
	)
}

export default TitleSection
