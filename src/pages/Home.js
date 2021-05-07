import React from 'react';
import ListaCategorias from '../components/ListaCategorias';
import ListaPost from '../components/ListaPost';

function Home() {
	return (
		<main>
			<div className="container">
				<h2 className="titulo-pagina">Pet Notícias</h2>
			</div>
			<ListaCategorias />
			<ListaPost url={'/posts'} />
		</main>
	);
}

export default Home;
