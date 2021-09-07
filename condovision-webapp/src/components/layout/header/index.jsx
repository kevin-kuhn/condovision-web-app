import React, { useState } from "react"
import { Fade as Hamburger } from "hamburger-react"
import { StaticImage } from "gatsby-plugin-image"

import { ArrowIcon } from "../../../assets/icons"
import { SERVICES } from "../../../constants/services"

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
	const [isOpen, setIsOpen] = useState(false)

	const toggleIsOpen = () => {
		setIsOpen(isOpen => !isOpen)
	}

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

			<div onClick={toggleIsOpen} className={styles.hamburger}>
				<Hamburger direcrion='left' />
			</div>
			<nav className={`${styles.nav} ${isOpen ? styles.navTranslate : ""}`}>
				<ul className={styles.ul}>
					<NavOption>
						{" "}
						<div className={styles.title}>Página Inicial</div>
					</NavOption>
					<NavOption>
						<div className={styles.title}>
							Serviços
							<ArrowIcon size={5} />
						</div>
						<ul className={styles.ulSecondary}>
							{SERVICES.map(service => (
								<li className={styles.liSecondary}>
									{service.icon} {service.name}
								</li>
							))}
						</ul>
					</NavOption>
					<NavOption>
						<div className={styles.title}>
							Contato <ArrowIcon size={5} />
						</div>
					</NavOption>
					<NavOption>
						<div className={styles.title}>Sobre nós</div>
					</NavOption>
				</ul>
			</nav>
		</header>
	)
}

export default Header
