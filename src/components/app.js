import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from 'mobx-preact';

import Header from './header';
import Home from 'async!../routes/home';
import Profile from 'async!../routes/profile';
import ProfileStore from '../routes/profile/store';

if (module.hot) {
	require('preact/debug');
}

const store = new ProfileStore();

export default class App extends Component {
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<Provider store={store}>
				<div id="app">
					<Header />
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<Profile path="/profile/" user="me" />
						<Profile path="/profile/:user" />
					</Router>
				</div>
			</Provider>
		);
	}
}
