import React, { useState } from "react"
import { Link } from "gatsby"
import { Fade as Hamburger } from "hamburger-react"
import { StaticImage } from "gatsby-plugin-image"

import { ArrowIcon, WhatsAppIcon, MailIcon } from "../../../assets/icons"
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

//TODO: AJUSTAR STRING WHATS
const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleIsOpen = () => {
		setIsOpen(isOpen => !isOpen)
	}

	const closeHeader = () => {
		setIsOpen(false)
	}

	return (
		<header className={styles.header}>
			<Link to='/'>
				<div className={styles.div} onClick={closeHeader}>
					<StaticImage
						placeholder='blurred'
						src='../../../assets/images/logo.png'
						alt='logo'
						layout='fixed'
						width={200}
					/>
				</div>
			</Link>

			<div onClick={toggleIsOpen} className={styles.hamburger}>
				<Hamburger direction='right' />
			</div>
			<nav className={`${styles.nav} ${isOpen ? styles.navTranslate : ""}`}>
				<ul className={styles.ul}>
					<NavOption>
						<Link to='/'>
							<div onClick={closeHeader} className={styles.title}>
								Página Inicial
							</div>
						</Link>
					</NavOption>
					<NavOption>
						<div className={styles.title}>
							Serviços
							<ArrowIcon size={5} />
						</div>
						<ul className={styles.ulSecondary}>
							{SERVICES.map(service => (
								<Link key={service.name} to={service.path}>
									<li className={styles.liSecondary}>
										{service.icon} {service.name}
									</li>
								</Link>
							))}
						</ul>
					</NavOption>
					<NavOption>
						<div className={styles.title}>
							Contato <ArrowIcon size={5} />
						</div>
						<ul className={`${styles.ulSecondary}`}>
							<li className={styles.liSecondary}>
								<a
									className={styles.a}
									href={`https://api.whatsapp.com/send?text=${encodeURI(
										"Olá vim atraves do site"
									)}&phone=555193300274`}
									target='_blank'
								>
									<WhatsAppIcon size={20} /> Envie uma mensagem
								</a>
							</li>
							<li className={styles.liSecondary}>
								<MailIcon size={20} /> Envie um email
							</li>
						</ul>
					</NavOption>
					<NavOption>
						<Link to='/sobre-nos'>
							<div className={styles.title}>Sobre nós</div>
						</Link>
					</NavOption>
				</ul>
			</nav>
		</header>
	)
}

export default Header
