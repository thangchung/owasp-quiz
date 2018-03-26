import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'preact-router';
import { Provider } from 'mobx-preact';
import { AppBar } from 'react-toolbox/lib/app_bar';

import { Header, Footer } from './';
import Profile from 'async!../routes/profile';
import Exam from 'async!../routes/exam';

import { store } from '../models';

if (module.hot) {
	require('preact/debug');
}

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
						<Exam path="/" />
						<Profile path="/profile/" user="me" />
						<Profile path="/profile/:user" />
					</Router>
					<Footer />
				</div>
			</Provider>
		);
	}
}
