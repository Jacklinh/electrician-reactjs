import React from 'react'

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Products from './components/Products';
function App() {

	return (
		<>
			<Header />
			<main>
				<div className="container">
					<Products />
				</div>
			</main>
			<Footer />
		</>
	)
}

export default App

