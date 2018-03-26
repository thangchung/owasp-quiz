import React, { Component } from 'react';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>OWASP Quiz App</h1>
				<nav>
					<Link activeClassName={style.active} href="/">Welcome</Link>
					<Link activeClassName={style.active} href="/profile">Me</Link>
					<Link activeClassName={style.active} href="/profile/thangchung">Thang</Link>
				</nav>
			</header>
		);
	}
}
