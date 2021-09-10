import React from "react"
import {
	CameraIcon,
	EletricIcon,
	FireIcon,
	SirenIcon,
	EngineIcon,
	PhoneIcon,
	VideoIcon,
	IpIcon,
	MobileIcon,
} from "@assets/icons"

export const SERVICES = [
	{
		name: "Câmeras",
		path: '/cameras',
		icon: <CameraIcon />,
	},
	{
		name: "Cerca elétrica",
		path: '/cerca-eletrica',
		icon: <EletricIcon />,
	},
	{
		name: "Detecção de incêndio",
		path: '/incendio',
		icon: <FireIcon />,
	},
	{
		name: "Alarmes",
		path: '/alarmes',
		icon: <SirenIcon />,
	},
	{
		name: "Motores de portão",
		path: '/motores',
		icon: <EngineIcon size={20}/>,
	},
	{
		name: "Controle de acesso",
		path: '/controle-acesso',
		icon: <MobileIcon />,
	},
	{
		name: "Interfonia",
		path: '/interfonia',
		icon: <PhoneIcon />,
	},
	{
		name: "Interfonia por vídeo",
		path: '/interfonia-video',
		icon: <VideoIcon size={20} />,
	},
	{
		name: "Projetos IP",
		path: '/projetos-ip',
		icon: <IpIcon size={20} />,
	},
]
