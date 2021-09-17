import React from "react"
import ServiceCard from "./service-card"
import HomeHeader from './home-header'

import { CameraIcon } from "@assets/icons"

const Home = () => {
	return (
		<section>
			<HomeHeader />
			<ServiceCard
				service={{
					name: "Câmeras",
					path: "/cameras",
					icon: <CameraIcon />,
					shortDescription: `As câmeras de monitoramento oferecem um sistema de gravação de imagens onde tudo oque acontece em um determinado local 
					fica registrado em um gravador de vídeo digital (DVR) podendo ser acessado a qualquer momento através de um celular ou 
					monitor de vìdeo e recuperar imagens de algum fato ocorrido naquele local.`
				}}
			/>
		</section>
	)
}

export default Home
