import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';

import {busca} from '../services/api';

import '../assets/css/post.css';

export default function Post() {
	const {id} = useParams();
	const [post, setPost] = useState({});
	const history = useHistory();

	useEffect(() => {
		busca(`/posts/${id}`, setPost).catch(() => {
			history.push('/404');
		});

		// eslint-disable-next-line
	}, [id]);

	return (
		<main className="container flex flex--centro">
			<article className="cartao post">
				<h2 className="cartao__titulo">{post.title}</h2>
				<p className="cartao__texto">{post.body}</p>
			</article>
		</main>
	);
}
