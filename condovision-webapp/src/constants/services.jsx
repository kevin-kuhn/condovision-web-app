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
	HelmetIcon,
	SunIcon,
	LightIcon,
	ControlIcon,
	StopIcon
} from "@assets/icons"

export const SERVICES = [
	{
		name: "Câmeras",
		path: "/cameras",
		icon: <CameraIcon />,
		shortDescription: `As câmeras de monitoramento oferecem um sistema de gravação de imagens onde tudo oque acontece em um determinado local 
		fica registrado em um gravador de vídeo digital (DVR) podendo ser acessado a qualquer momento através de um celular ou 
		monitor de video e recuperar imagens de algum fato ocorrido naquele local.`,
	},
	{
		name: "Cerca elétrica",
		path: "/cerca-eletrica",
		icon: <EletricIcon />,
		shortDescription: `O sistema de cerca elétrica é muito importante para proteger você, sua família e seu patrimônio.
		Esse sistema tem como finalidade prevenir a intrusão por cima de muros, grades ou telhados através de fios de inox fixados
		nas hastes formando uma cerca e que são ligados a uma central de choque pulsativa.`,
	},
	{
		name: "Detecção de incêndio",
		path: "/incendio",
		icon: <FireIcon />,
		shortDescription: `	Quando um incêndio é detectado é possível acionar esse sistema de alarme para avisar a todos que evacuem o local imediatamente.
		O acionamento do sistema pode ser feito manualmente através dos acionadores eletrônicos manuais que possuem um botão de acionamento.`,
	},
	{
		name: "Alarmes",
		path: "/alarmes",
		icon: <SirenIcon />,
		shortDescription: `O sistema de alarme funciona para alertar sobre uma intrusão ou para inibir uma. 
		Através de sensores de porta e janelas, sensores de presença e vários outros tipos de sensores
		o alarme protege sua casa, sua empresa ou até mesmo um terreno aberto com sensores modernos tipo barreiras.`,
	},
	{
		name: "Motores de portão",
		path: "/motores",
		icon: <EngineIcon size={20} />,
		shortDescription: `Hoje em dia descer do carro para abrir o portão não é uma boa opção. Principalmente a noite.
		Por isso existem os motores de portão, para ajudar você e sua família nesse momento. 
		Os motores podem ser instalados em portões residenciais, comerciais, em condomínios ou em qualquer lugar.`,
	},
	{
		name: "Controle de acesso",
		path: "/controle-acesso",
		icon: <MobileIcon />,
		shortDescription: `Normalmente usado em condomínios e empresas, o controle de acesso serve exatamente para manter o controle de quem entra e sai
		do local. Esse controle de circulação de pessoas pode ser feito através de sistemas eletrônicos normalmente com fechaduras 
		em portas de passagem.`,
	},
	{
		name: "Interfonia",
		path: "/interfonia",
		icon: <PhoneIcon />,
		shortDescription: `Com a vida moderna também veio a necessidade de comunicação. Nada melhor que o sistema de interfonia para resolver esse problema.
		Existem alguns tipos de sistemas de interfones e agora você pode entender qual sistema irá lhe atender melhor.`,
	},
	{
		name: "Interfonia por vídeo",
		path: "/interfonia-video",
		icon: <VideoIcon size={20} />,
		shortDescription: `Mais conhecido como vídeo porteiro, a interfonia por vídeo é semelhante a interfonia comum, porém com a diferença 
		que além de conversar com a pessoa pelo interfone é também possível ver a pessoa. Isso traz mais segurança na hora 
		de atender o interfone.`,
	},
	{
		name: "Projetos IP",
		path: "/projetos-ip",
		icon: <IpIcon size={20} />,
		shortDescription: `Os projetos IP são importantes onde é necessário um número muito grande de câmeras como grandes condomínios,
		empresas, estádios e até mesmo cidades. Desenvolvemos e executamos os projetos IP podendo ser de câmeras ou de controles de acesso.`,
	},
	{
		name: "Contrato de Manutenção",
		path: "/contrato-manuntencao",
		icon: <HelmetIcon size={22} />,
		shortDescription: `O contrato de manutenção serve para dar mais comodidade e tranquilidade ao seu sistema de segurança eletrônica,
		controles de acesso, motores de portão e elétrica geral dependendo do sistema a ser contratado.
		É realizado visitadas periódicas para revisão e manutenção.`,
	},
	{
		name: "Energia Solar",
		path: "/energia-solar",
		icon: <SunIcon />,
		shortDescription: `Transforme sua residência em um ambiente mais sustentável, moderno e que também reflita na economia das despesas
		com a conta de luz. Na sua empresa os custos com energia elétrica pode ser um grande vilão no orçamento final do mês.`,
	},
	{
		name: "Luz de emergência",
		path: "/luz-emergencia",
		icon: <LightIcon />,
		shortDescription: `Trabalhamos com luz de emergência para prédios, residências, condomínios e empresas.
		A luz de emergência é muito importante no caso de falta de energia elétrica, para que os locais se iluminem
		principalmente corredores e escadarias.`,
	},
	{
		name: "Tag e controle remoto",
		path: "/tag-controle-remoto",
		icon: <ControlIcon />,
		shortDescription: `Trabalhamos com as melhores marcas de tag e de controle remoto para sua comodidade.
		Cópias e cadastros de tags(chaveiros) e de controle remotos.`,
	},
	{
		name: "Cancelas",
		path: "/cancelas",
		icon: <StopIcon />,
		shortDescription: `Instalação de cancelas para estacionamento, pedágios e demais pavimentos.`,
	},
]
