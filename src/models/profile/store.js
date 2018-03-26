import { observable, action } from 'mobx';

export default class ProfileStore {
	@observable count = 1;
	@observable time = Date.now();

	constructor(parentStore) {
		this.parentStore = parentStore;
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