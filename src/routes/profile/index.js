import React, { Component } from 'react';

import { DatePicker } from 'react-toolbox/lib/date_picker';
import { connect } from 'mobx-preact';
import style from './style';

const datetime = new Date(2015, 10, 16);
const min_datetime = new Date(new Date(datetime).setDate(8));
datetime.setHours(17);
datetime.setMinutes(28);

@connect(['store'])
export default class Profile extends Component {
	constructor(props) {
		super(props);
		this.localStore = this.props.store.profileStore;
		this.state = {
			date1: datetime
		};
	}

	componentDidMount() {
		this.timer = setInterval(this.updateTime, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	updateTime = () => {
		this.localStore.updateTime(Date.now());
	};

	increment = () => {
		this.localStore.increment();
	};

	handleChange = (item, value) => {
		this.setState({ ...this.state, [item]: value });
	};

	render({ user }) {
		return (
			<div class={style.profile}>
				<h1>Profile: {user}</h1>
				<p>This is the user profile for a user named {user}.</p>

				<div>Current time: {new Date(this.localStore.time).toLocaleString()}</div>

				<p>
					<button class="button is-primary is-small is-outlined" onClick={this.increment}>Click Me</button>
					{' '}
					Clicked {this.localStore.count} times.
				</p>

				<p>
					<DatePicker label='Birthdate' onChange={this.handleChange.bind(this, 'date1')} value={this.state.date1} />
				</p>
			</div>
		);
	}
}
