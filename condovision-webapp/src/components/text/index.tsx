import React from "react"
import * as styles from "./styles.module.css"

const Text = ({ children, className }) => {
	return <p className={`${styles.p} ${className ?? ''}`}>{children}</p>
}

export default Text