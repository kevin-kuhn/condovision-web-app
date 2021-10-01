exports.createPages = ({ actions }) => {
	const { createPage } = actions
	const serviceData = [
		{
			name: "Câmeras",
			path: "cameras",
			imagePath: "camera.jpg",
			imageHeaderPath: "camera-header.jpg",
			shortDescription: `As câmeras de monitoramento oferecem um sistema de gravação de imagens onde tudo oque acontece em um determinado local 
			fica registrado em um gravador de vídeo digital (DVR) podendo ser acessado a qualquer momento através de um celular ou 
			monitor de vìdeo e recuperar imagens de algum fato ocorrido naquele local.`,
			text: `As câmeras de monitoramento oferecem um sistema de gravação de imagens onde tudo oque acontece em um determinado local 
			fica registrado em um gravador de vídeo digital (DVR) podendo ser acessado a qualquer momento através de um celular ou 
			monitor de vìdeo e recuperar imagens de algum fato ocorrido naquele local.<br /><br />
			
			É mais conhecido como CFTV (circuito fechado de televisão) e muito usado em residências, condomínios e empresas para monitorar 
			pontos estratégicos e registrar qualquer evento acontecido naquele local como roubos, furtos e vandalismo.<br /><br />
			
			Com um bom HD interno pode ser armazenado muito tempo de gravação de imagens chegando até semanas ou meses. 
			Isso significa que um fato ocorrido há mais de um mês e que foi registrado por uma câmera pode ser acessado
			e o vídeo pode ser visto novamente ou até mesmo salvo em um pendrive.
			Através de um aplicativo de celular podem ser visualizadas as imagens das câmeras em tempo real ou até mesmo acessar
			imagens de outros dias.<br /><br /> 
			
			Oferecemos câmeras de alta resolução e inclusive câmeras mais modernas com imagens coloridas a noite.
			Também trabalhamos com câmeras IPs e WIFI.
			Insatale um sistema de câmeras e fique mais seguro.`,
		},
		{
			name: "Cerca elétrica",
			path: "cerca-eletrica",
			imagePath: "cerca-eletrica.jpg",
			imageHeaderPath: "cerca-eletrica-header.png",
			shortDescription: `O sistema de cerca elétrica é muito importante para proteger você, sua família e seu patrimônio.
			Esse sistema tem como finalidade prevenir a intrusão por cima de muros, grades ou telhados através de fios de inox fixados
			nas hastes formando uma cerca e que são ligados a uma central de choque pulsativa.`,
			text: `O sistema de cerca elétrica é muito importante para proteger você, sua família e seu patrimônio.
			Esse sistema tem como finalidade prevenir a intrusão por cima de muros, grades ou telhados através de fios de inox fixados
			nas hastes formando uma cerca e que são ligados a uma central de choque pulsativa que libera pulsos de energia elétrica semelhantes a um TASER.
			(arma de choque elétrico não letal).<br /><br /> 
			
			O sistema pode ser acionado via controle remoto ou aplicativo de celular. Após a tentativa de invasão ou de rompimento
			de um fio da cerca é acionado uma sirene e no caso do aplicativo de celular é recebido uma notificação de intrusão.
			Em caso de falta de energia elétrica há uma bateria interna que deixa a cerca funcionando normalmente por horas.<br /><br /> 
			
			Com uma cerca elétrica instalada seu patrimônio e sua família estarão mais protegidos. `,
		},
		{
			name: "Detecção de incêndio",
			path: "incendio",
			imagePath: "incendio.jpg",
			imageHeaderPath: "incendio-header.jpg",
			shortDescription: `	Quando um incêndio é detectado é possível acionar esse sistema de alarme para avisar a todos que evacuem o local imediatamente.
			O acionamento do sistema pode ser feito manualmente através dos acionadores eletrônicos manuais que possuem um botão de acionamento.`,
			text: `O sistema eletrônico de alarme de detecção de incêndio é fundamental para prevenir danos materiais e principalmente para
			proteger vidas!<br /><br />
			Quando um incêndio é detectado é possível acionar esse sistema de alarme para avisar a todos que evacuem o local imediatamente.
			O acionamento do sistema pode ser feito manualmente através dos acionadores eletrônicos manuais que possuem um botão de acionamento
			ou pode ser feito automaticamente através de um detector de fumaça ou até mesmo de um sensor de mudança brusca de temperatura.
			Após acionado, o sistema entra em modo de disparo. Nesse momento os sinalizadores eletrônicos audiovisuais entram em ação 
			disparando o som de uma sirene e emitindo uma luz piscante da cor vermelha.<br /><br />
			
			A instalação do sistema deve seguir o PPCI (plano de prevenção contra incêndio) do local a ser instalado.
			Esse projeto deve ser feito por um engenheiro seguindo as normas do Corpo de Bombeiros de cada estado.
			Também devem ser instalados placas fotoluminescentes para sinalização de rotas de fuga e identificação de pavimentos além
			de um sistema de luz de emergência em caso de falta de energia elétrica.`,
		},
		{
			name: "Alarmes",
			path: "alarmes",
			imagePath: "alarme.jpg",
			imageHeaderPath: "alarme-header.jpg",
			shortDescription: `O sistema de alarme funciona para alertar sobre uma intrusão ou para inibir uma. 
			Através de sensores de porta e janelas, sensores de presença e vários outros tipos de sensores
			o alarme protege sua casa, sua empresa ou até mesmo um terreno aberto com sensores modernos tipo barreiras.`,
			text: `O sistema de alarme funciona para alertar sobre uma intrusão ou para inibir uma. 
			Através de sensores de porta e janelas, sensores de presença e vários outros tipos de sensores
			o alarme protege sua casa, sua empresa ou até mesmo um terreno aberto com sensores modernos tipo barreiras.
			Quando um sensor detecta uma violação é acionado uma sirene e enviado uma notificação no aplicativo de celular.
			O sistema funciona mesmo sem energia elétrica pois tem uma bateria interna com autonomia de várias horas.
			O alarme por aplicativo de celular te deixa mais tranquilo pois você sabe o que está acontecendo
			enquanto você não está no local.
			Proteja sua casa ou sua empresa com um sistema de alarme.`,
		},
		{
			name: "Motores de portão",
			path: "motores",
			imagePath: "motor.jpg",
			imageHeaderPath: "motor-header.jpg",
			shortDescription: `Hoje em dia descer do carro para abrir o portão não é uma boa opção. Principalmente a noite.
			Por isso existem os motores de portão, para ajudar você e sua família nesse momento. 
			Os motores podem ser instalados em portões residenciais, comerciais, em condomínios ou em qualquer lugar.`,
			text: `Hoje em dia descer do carro para abrir o portão não é uma boa opção. Principalmente a noite.
			Por isso existem os motores de portão, para ajudar você e sua família nesse momento. 
			Os motores podem ser instalados em portões residenciais, comerciais, em condomínios ou em qualquer lugar. 
			Não importa o peso, o tamanho ou o tipo de portão ou porta, nós temos um motor adequado para sua necessidade.<br /><br /> 
			
			Oferemos desde a linha de motores comuns até a linha de motores rápidos que abrem o portão com
			até 3x mais velocidade. Por exemplo um portão que abre em 18 segundos com um motor comum, pode abrir em 
			até 6 segundos com um motor rápido. Em muitos casos é possível substituir apenas a placa eletrônica 
			do motor para o tornar mais rápido.
			Isso é muito importante em locais perigosos ou a noite quando não se deve ficar muito tempo no
			carro esperando o portão abrir.`,
		},
		{
			name: "Controle de acesso",
			path: "controle-acesso",
			imagePath: "acesso.jpg",
			imageHeaderPath: "acesso-header.jpg",
			shortDescription: `Normalmente usado em condomínios e empresas, o controle de acesso serve exatamente para manter o controle de quem entra e sai
			do local. Esse controle de circulação de pessoas pode ser feito através de sistemas eletrônicos normalmente com fechaduras 
			em portas de passagem.`,
			text: `Normalmente usado em condomínios e empresas, o controle de acesso serve exatamente para manter o controle de quem entra e sai
			do local. Esse controle de circulação de pessoas pode ser feito através de sistemas eletrônicos normalmente com fechaduras 
			nas portas de passagem que são liberadas através de um cartão, tag, senha, controle remoto, biometria ou até mesmo pelo interfone. 
			Sistemas mais modernos contam com a liberação de portas através de reconhecimento facial ou QR Code no celular.<br /><br /> 
			
			Oferecemos desde controles de acesso mais simples com apenas a liberação da porta de passagem através de senhas ou tags 
			até controles de acesso mais avançados com o registro de usuários para saber o nome da pessoa e o horário exato em que chegou
			ou saiu do local dando mais segurança para todos.<br /><br /> 
			
			Oferecemos também controles de acesso para veículos para entrada e saída de condomínios, escolas ou empresas do tipo adesivo no vidro
			semelhante aqueles usados em pedágios. Também pode ser com registro do horário de entrada e saída do veículo.`,
		},
		{
			name: "Interfonia",
			path: "interfonia",
			imagePath: "interfonia.jpg",
			imageHeaderPath: "interfonia-header.jpg",
			shortDescription: `Com a vida moderna também veio a necessidade de comunicação. Nada melhor que o sistema de interfonia para resolver esse problema.
			Existem alguns tipos de sistemas de interfones e agora você pode entender qual sistema irá lhe atender melhor.`,
			text: `Com a vida moderna também veio a necessidade de comunicação. Nada melhor que o sistema de interfonia para resolver esse problema.
			Existem alguns tipos de sistemas de interfones e agora você pode entender qual sistema irá lhe atender melhor.<br /><br />
			
			Interfonia residencial
			É aquela onde existe um painel de rua onde a pessoa toca o interfone e é feito uma chamada para outro
			interfone dentro de uma resisdência ou até mesmo um comércio.<br /><br />
			
			Interfonia coletiva
			Muito usada em condomínios ou prédios comerciais onde no painel de rua a pessoa pode escolher para qual apartamento
			ou sala comercial deseja ligar. Também é possível fazer chamadas entre apartamentos ou salas comerciais.<br /><br />
			
			Interfonia GSM
			Funciona igual as outras mas com a diferença de ao invés de chamar no interfone dentro da casa ou comércio, chama direto no celular
			através de uma ligação normal.`,
		},
		{
			name: "Interfonia por vídeo",
			path: "interfonia-video",
			imagePath: "interfonia-ip.jpg",
			imageHeaderPath: "interfonia-ip-header.png",
			shortDescription: `Mais conhecido como vídeo porteiro, a interfonia por vídeo é semelhante a interfonia comum, porém com a diferença 
			que além de conversar com a pessoa pelo interfone é também possível ver a pessoa. Isso traz mais segurança na hora 
			de atender o interfone.`,
			text: `Mais conhecido como vídeo porteiro, a interfonia por vídeo é semelhante a interfonia comum, porém com a diferença 
			que além de conversar com a pessoa pelo interfone é também possível ver a pessoa. Isso traz mais segurança na hora 
			de atender o interfone.
			Como na interfonia comum, a interfonia por vídeo também existem alguns sistemas diferentes.<br /><br />
			
			Interfonia por vídeo residencial
			É um painel de rua com uma câmera acoplada onde a pessoa toca o interfone e dentro da residência ou de um comércio
			é possível ver quem está interfonando antes mesmo de atender. A pessoa é vista através de uma tela acoplada no interfone interno.<br /><br />
			
			Interfonia por vídeo coletiva
			Usada em condomínios e prédios funciona da mesma forma. A pessoa pode escolher para qual apartamento ou sala comercial
			deseja chamar e cada apartamento ou sala comercial tem um interfone com uma tela acoplada onde é possível ver quem está chamando
			seja um entregador, um parente, um funcionário ou um desconhecido.<br /><br />
			
			Interfonia por vídeo coletiva Híbrida
			Funciona da mesma forma que a interfonia por vídeo coletiva. A diferença que é usada onde já existe sistema de interfonia coletiva comum
			e se deseja apenas adicionar um sistema por vídeo sem a necessidade de trocar todo o sistema de interfonia comum já existente.
			Dessa forma reduzindo custos.<br /><br />
			
			Interfonia por vídeo coletiva IP
			Interfonia por vídeo de alta tecnologia.Funciona igual a interfonia por vídeo coletiva porém com áudio e vídeo de alta resolução. 
			Tem um diferencial ainda de caso a pessoa não atender o interfone no apartamento ou na sala comercial a 
			chamada será direcionada para o celular da pessoa através do aplicativo e poderá ser visto a imagem de quem está interfonando, 
			mesmo quem atende estando fora da cidade ou do país.`,
		},
		{
			name: "Projetos IP",
			path: "projetos-ip",
			imagePath: "ip.jpg",
			imageHeaderPath: "ip-header.jpg",
			shortDescription: `Os projetos IP são importantes onde é necessário um número muito grande de câmeras como grandes condomínios,
			empresas, estádios e até mesmo cidades. Desenvolvemos e executamos os projetos IP podendo ser de câmeras ou de controles de acesso.`,
			text: `Os projetos IP são importantes onde é necessário um número muito grande de câmeras como grandes condomínios,
			empresas, estádios e até mesmo cidades.
			Desenvolvemos e executamos os projetos IP podendo ser de câmeras ou de controles de acesso.<br />
			IP significa do inglês "internet protocol" ou protocolo de rede que são sistemas integrados através de uma rede de internet.
			Podemos integrar câmeras de alta tecnologia e controles de acesso como os de reconhecimento facial, biometria, QR Code, etc...
			Soluções inovadoras e tecnológicas você encontra nos projetos IP.`,
		},
		{
			name: "Contrato de Manutenção",
			path: "contrato-manuntencao",
			imagePath: "manutencao.jpg",
			imageHeaderPath: "manutencao-header.jpg",
			shortDescription: ``,
			text: ``,
		},
	]

	serviceData.forEach(service => {
		createPage({
			path: `/${service.path}`,
			component: require.resolve(`./src/templates/service-template.jsx`),
			context: { service },
		})
	})
}

const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				"@components": path.resolve(__dirname, "src/components"),
				"@assets": path.resolve(__dirname, "src/assets"),
				"@constants": path.resolve(__dirname, "src/constants"),
				"@hooks": path.resolve(__dirname, "src/hooks"),
			},
		},
	})
}
