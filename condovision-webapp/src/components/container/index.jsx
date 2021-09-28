import React from "react"
import * as styles from "./styles.module.css"

const Container = ({ children }) => {
	return (
		<section className={styles.container}>
			{children}
		</section>
	)
}

export default Container
