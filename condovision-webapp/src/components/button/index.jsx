import React from "react"

import * as styles from "./styles.module.css"

const Button = ({ children, onClick, className }) => {
	return (
		<button className={`${styles.button} ${className ?? ""}`} onClick={onClick}>
			{children}
		</button>
	)
}

export default Button
