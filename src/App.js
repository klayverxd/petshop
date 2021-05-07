import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import './assets/css/base/base.css';

import Home from './pages/Home';
import Sobre from './pages/Sobre';

import Pagina404 from './pages/Pagina404';
import Cabecalho from './components/Cabecalho';
import Post from './pages/Post';

function App() {
	return (
		<Router>
			<Cabecalho />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/sobre">
					<Sobre />
				</Route>
				<Route path="/posts/:id">
					<Post />
				</Route>
				<Route>
					<Pagina404 />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
