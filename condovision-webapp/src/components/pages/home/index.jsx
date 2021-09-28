import React from "react"

import HomeHeader from "./home-header"
import ServicesList from "./services-list"
import CompaniesList from "./companies-list"

const Home = () => {
	return (
		<>
			<HomeHeader />
			<ServicesList />
			<CompaniesList />
		</>
	)
}

export default Home
