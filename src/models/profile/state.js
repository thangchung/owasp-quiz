import { observable, action } from 'mobx';

export default class ProfileState {
	@observable count = 1;
	@observable time = Date.now();

	constructor(parentState) {
		this.parentState = parentState;
	}

	@action
	increment = () => {
		this.count++;
	}

	@action
	updateTime = (time) => {
		this.time = time;
	}
}