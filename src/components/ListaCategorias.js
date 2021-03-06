import React, {useEffect, useState} from 'react';

import {busca} from '../services/api';

import '../assets/css/blog.css';
import {Link} from 'react-router-dom';

export default function ListaCategorias() {
	const [categorias, setCategorias] = useState([]);

	useEffect(() => {
		busca(`/categorias`, setCategorias);
	}, []);

	return (
		<ul className="lista-categorias container flex">
			{categorias.map(categoria => (
				<Link to={`/categoria/${categoria.id}`}>
					<li
						className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}
					>
						{categoria.nome}
					</li>
				</Link>
			))}
		</ul>
	);
}
