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
				<Route exact path="/" component={Home} />
				<Route path="/sobre" component={Sobre} />
				<Route path="/posts/:id" component={Post} />
				<Route component={Pagina404} />
			</Switch>
		</Router>
	);
}

export default App;
