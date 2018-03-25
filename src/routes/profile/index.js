import { h, Component } from 'preact';
import { observer, Provider, inject, connect } from 'mobx-preact';
import style from './style';

@inject('store')
@observer
export default class Profile extends Component {
	componentDidMount() {
		this.timer = setInterval(this.updateTime, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	updateTime = () => {
		this.props.store.updateTime(Date.now());
	};

	increment = () => {
		this.props.store.increment();
	};

	render({ user }, { time, count }) {
		return (
			<div class={style.profile}>
				<h1>Profile: {user}</h1>
				<p>This is the user profile for a user named {user}.</p>

				<div>Current time: {new Date(this.props.store.time).toLocaleString()}</div>

				<p>
					<button onClick={this.increment}>Click Me</button>
					{' '}
					Clicked {this.props.store.count} times.
				</p>
			</div>
		);
	}
}
