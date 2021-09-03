import React from "react"

import { StaticImage } from "gatsby-plugin-image"

import * as styles from "./styles.module.css"

const NavOption = ({ children, isSelected }) => {
	return (
		<li className={styles.li}>
			<h3
				className={`${styles.h3} text-md ${
					isSelected ? "text-primary" : "text-secondary"
				}`}
			>
				{children}
			</h3>
		</li>
	)
}

const Header = () => {
	return (
		<header className={styles.header}>
			<StaticImage
				placeholder='blurred'
				src='../../../assets/images/logo.png'
				alt='logo'
				layout="fixed"
				width={200}
			/>
			<nav className={styles.nav}>
				<ul className={styles.ul}>
					<NavOption>Página Inicial</NavOption>
					<NavOption>Serviços</NavOption>
					<NavOption>Contato</NavOption>
					<NavOption>Sobre nós</NavOption>
				</ul>
			</nav>
		</header>
	)
}

export default Header
