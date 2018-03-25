import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from 'mobx-preact';

import Header from './header';
import Footer from './footer';

import Welcome from 'async!../routes/welcome';
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
						<Welcome path="/" />
						<Profile path="/profile/" user="me" />
						<Profile path="/profile/:user" />
					</Router>
					<Footer />
				</div>
			</Provider>
		);
	}
}
