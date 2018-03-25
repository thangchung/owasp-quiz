import { h, Component } from 'preact';
import { observer, inject } from 'mobx-preact';
import style from './style';

@inject('store')
@observer
export default class Profile extends Component {
	constructor(props) {
		super(props);
		this.localState = this.props.store.profileState;
	}

	componentDidMount() {
		this.timer = setInterval(this.updateTime, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	updateTime = () => {
		this.localState.updateTime(Date.now());
	};
	
	increment = () => {
		this.localState.increment();
	};

	render({ user }) {
		return (
			<div class={style.profile}>
				<h1>Profile: {user}</h1>
				<p>This is the user profile for a user named {user}.</p>

				<div>Current time: {new Date(this.localState.time).toLocaleString()}</div>

				<p>
					<button class="button is-primary is-small is-outlined" onClick={this.increment}>Click Me</button>
					{' '}
					Clicked {this.localState.count} times.
				</p>
			</div>
		);
	}
}
