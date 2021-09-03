import React from "react"

const Text = ({ children, className }) => {
	return <p className={`text-secondary text-base ${className ?? ''}`}>{children}</p>
}

export default Text