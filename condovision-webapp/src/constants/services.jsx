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
} from "../assets/icons"

export const SERVICES = [
	{
		name: "Câmeras",
		icon: <CameraIcon />,
	},
	{
		name: "Cerca elétrica",
		icon: <EletricIcon />,
	},
	{
		name: "Detecção de incêndio",
		icon: <FireIcon />,
	},
	{
		name: "Alarmes",
		icon: <SirenIcon />,
	},
	{
		name: "Motores de portão",
		icon: <EngineIcon size={20}/>,
	},
	{
		name: "Controle de acesso",
		icon: <MobileIcon />,
	},
	{
		name: "Interfonia",
		icon: <PhoneIcon />,
	},
	{
		name: "Interfonia por vídeo",
		icon: <VideoIcon size={20} />,
	},
	{
		name: "Projetos IP",
		icon: <IpIcon size={20} />,
	},
]
