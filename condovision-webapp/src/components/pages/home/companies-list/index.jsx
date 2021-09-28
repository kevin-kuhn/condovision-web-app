import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "./styles.module.css"

import { Container, TitleSection } from "@components"

const CompaniesList = () => {
	return (
		<Container>
			<TitleSection title='Somos especialistas quando o assunto é segurança eletrônica' />
			<div className={styles.companyList}>
				<div className={styles.companyImage}>
					<Link to=''>
						<StaticImage
							placeholder='blurred'
							src='../../../../assets/images/companies/agl.jpg'
							alt='AGL'
							layout='fixed'
							height={40}
						/>
					</Link>
				</div>
				<div className={styles.companyImage}>
					<Link to=''>
						<StaticImage
							placeholder='blurred'
							src='../../../../assets/images/companies/automatiza.png'
							alt='Automatiza'
							layout='fixed'
							height={40}
						/>
					</Link>
				</div>
				<div className={styles.companyImage}>
					<Link to=''>
						<StaticImage
							placeholder='blurred'
							src='../../../../assets/images/companies/bravas.png'
							alt='Bravas'
							layout='fixed'
							height={30}
						/>
					</Link>
				</div>
				<div className={styles.companyImage}>
					<Link to=''>
						<StaticImage
							placeholder='blurred'
							src='../../../../assets/images/companies/compatec.jpg'
							alt='Compatec'
							layout='fixed'
							height={50}
						/>
					</Link>
				</div>
				<div className={styles.companyImage}>
					<Link to=''>
						<StaticImage
							placeholder='blurred'
							src='../../../../assets/images/companies/condutti.jpg'
							alt='Condutti'
							layout='fixed'
							height={50}
						/>
					</Link>
				</div>
				<div className={styles.companyImage}>
					<Link to=''>
						<StaticImage
							placeholder='blurred'
							src='../../../../assets/images/companies/controlid.jpg'
							alt='Control ID'
							layout='fixed'
							height={50}
						/>
					</Link>
				</div>
				<div className={styles.companyImage}>
					<Link to=''>
						<StaticImage
							placeholder='blurred'
							src='../../../../assets/images/companies/dni.jpg'
							alt='DNI'
							layout='fixed'
							height={50}
						/>
					</Link>
				</div>
				<div className={styles.companyImage}>
					<Link to=''>
						<StaticImage
							placeholder='blurred'
							src='../../../../assets/images/companies/hdl.png'
							alt='HDL'
							layout='fixed'
							height={50}
						/>
					</Link>
				</div>
				<div className={styles.companyImage}>
					<Link to=''>
						<StaticImage
							placeholder='blurred'
							src='../../../../assets/images/companies/hikvision.jpg'
							alt='Hikvision'
							layout='fixed'
							height={50}
						/>
					</Link>
				</div>
				<div className={styles.companyImage}>
					<Link to=''>
						<StaticImage
							placeholder='blurred'
							src='../../../../assets/images/companies/hilook.jpg'
							alt='Hilook'
							layout='fixed'
							height={50}
						/>
					</Link>
				</div>
				<div className={styles.companyImage}>
					<Link to=''>
						<StaticImage
							placeholder='blurred'
							src='../../../../assets/images/companies/intelbras.png'
							alt='Intelbras'
							layout='fixed'
							height={50}
						/>
					</Link>
				</div>
				<div className={styles.companyImage}>
					<Link to=''>
						<StaticImage
							placeholder='blurred'
							src='../../../../assets/images/companies/jfl.png'
							alt='JFL'
							layout='fixed'
							height={50}
						/>
					</Link>
				</div>
				<div className={styles.companyImage}>
					<Link to=''>
						<StaticImage
							placeholder='blurred'
							src='../../../../assets/images/companies/macrocabos.jpg'
							alt='Macrocabos'
							layout='fixed'
							height={50}
						/>
					</Link>
				</div>
				<div className={styles.companyImage}>
					<Link to=''>
						<StaticImage
							placeholder='blurred'
							src='../../../../assets/images/companies/mcm.jpg'
							alt='MCM'
							layout='fixed'
							height={50}
						/>
					</Link>
				</div>
				<div className={styles.companyImage}>
					<Link to=''>
						<StaticImage
							placeholder='blurred'
							src='../../../../assets/images/companies/megatron.jpg'
							alt='Megatron'
							layout='fixed'
							height={50}
						/>
					</Link>
				</div>
				<div className={styles.companyImage}>
					<Link to=''>
						<StaticImage
							placeholder='blurred'
							src='../../../../assets/images/companies/moura.jpg'
							alt='Moura'
							layout='fixed'
							height={50}
						/>
					</Link>
				</div>
				<div className={styles.companyImage}>
					<Link to=''>
						<StaticImage
							placeholder='blurred'
							src='../../../../assets/images/companies/nice.jpg'
							alt='Nice'
							layout='fixed'
							height={50}
						/>
					</Link>
				</div>
				<div className={styles.companyImage}>
					<Link to=''>
						<StaticImage
							placeholder='blurred'
							src='../../../../assets/images/companies/ppa.png'
							alt='PPA'
							layout='fixed'
							height={50}
						/>
					</Link>
				</div>
				<div className={styles.companyImage}>
					<Link to=''>
						<StaticImage
							placeholder='blurred'
							src='../../../../assets/images/companies/rossi.jpg'
							alt='Rossi'
							layout='fixed'
							height={50}
						/>
					</Link>
				</div>
				<div className={styles.companyImage}>
					<Link to=''>
						<StaticImage
							placeholder='blurred'
							src='../../../../assets/images/companies/seagate.jpg'
							alt='Seagate'
							layout='fixed'
							height={50}
						/>
					</Link>
				</div>
				<div className={styles.companyImage}>
					<Link to=''>
						<StaticImage
							placeholder='blurred'
							src='../../../../assets/images/companies/spa.png'
							alt='SPA'
							layout='fixed'
							height={50}
						/>
					</Link>
				</div>
				<div className={styles.companyImage}>
					<Link to=''>
						<StaticImage
							placeholder='blurred'
							src='../../../../assets/images/companies/wd.jpg'
							alt='Western Digital'
							layout='fixed'
							height={50}
						/>
					</Link>
				</div>
			</div>
		</Container>
	)
}

export default CompaniesList
