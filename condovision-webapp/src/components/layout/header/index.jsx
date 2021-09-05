import React from "react"
import { Fade as Hamburger } from "hamburger-react"

import { StaticImage } from "gatsby-plugin-image"

import * as styles from "./styles.module.css"

const NavOption = ({ children, isSelected }) => {
	return (
		<li className={styles.li}>
			<h3
				className={`${styles.h3} text-lg ${
					isSelected ? "text-primary" : "text-secondary"
				}`}
			>
				{children}
			</h3>
		</li>
	)
}

const Header = () => {
	const renderMenu = () => (
		<ul className={styles.ul}>
			<NavOption>Página Inicial</NavOption>
			<NavOption>Serviços</NavOption>
			<NavOption>Contato</NavOption>
			<NavOption>Sobre nós</NavOption>
		</ul>
	)

	return (
		<header className={styles.header}>
			<div className={styles.div}>
				<StaticImage
					placeholder='blurred'
					src='../../../assets/images/logo.png'
					alt='logo'
					layout='fixed'
					width={200}
				/>
			</div>

			<div className={styles.hamburger}>
				<Hamburger direcrion='left' />
			</div>
			<nav className={styles.nav}>{renderMenu()}</nav>
		</header>
	)
}

export default Header
