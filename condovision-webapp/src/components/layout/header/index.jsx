import React, { useState } from "react"
import { Link } from "gatsby"
import { Fade as Hamburger } from "hamburger-react"
import { StaticImage } from "gatsby-plugin-image"

import { ArrowIcon, WhatsAppIcon, MailIcon } from "@assets/icons"
import { SERVICES } from "@constants/services"

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

	const closeHeader = () => {
		setIsOpen(false)
	}

	return (
		<header className={styles.header} >
			<Link aria-label='redirecionar para outra página' to='/'>
				<div
					className={styles.div}
					onClick={closeHeader}
					onKeyDown={closeHeader}
					aria-label='menu'
					role='button'
					tabIndex={0}
				>
					<StaticImage
						placeholder='blurred'
						src='../../../assets/images/logo.png'
						alt='logo'
						layout='fixed'
						width={200}
					/>
				</div>
			</Link>

			<div
				onClick={toggleIsOpen}
				className={styles.hamburger}
				onKeyDown={toggleIsOpen}
				aria-label='menu'
				role='button'
				tabIndex={0}
			>
				<Hamburger label='menu-hamburguer' direction='right' toggled={isOpen} />
			</div>
			<nav className={`${styles.nav} ${isOpen ? styles.navTranslate : ""}`}>
				<ul className={styles.ul}>
					<NavOption>
						<Link aria-label='redirecionar para outra página' to='/'>
							<div
								onClick={closeHeader}
								onKeyDown={toggleIsOpen}
								className={styles.title}
								role='button'
								aria-label='menu'
								tabIndex={0}
							>
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
									aria-label='Contato whatsapp'
									href={`https://api.whatsapp.com/send?text=${encodeURI(
										"Olá vim atraves do site"
									)}&phone=48988634844`}
									target='_blank'
									rel='noreferrer'
								>
									<WhatsAppIcon size={20} /> Envie uma mensagem
								</a>
							</li>
							<li className={styles.liSecondary}>
								<a
									aria-label='Contato email'
									href={`mailto:andre2020sistemas@outlook.com?subject=${encodeURI(
										"Olá vim atraves do site"
									)}`}
									className={styles.a}
								>
									<MailIcon size={20} /> Envie um email
								</a>
							</li>
						</ul>
					</NavOption>
					<NavOption>
						<Link aria-label='redirecionar para outra página' to='/sobre-nos'>
							<div className={styles.title}>Sobre nós</div>
						</Link>
					</NavOption>
				</ul>
			</nav>
		</header>
	)
}

export default Header
