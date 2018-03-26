import { observable, action } from 'mobx';

export default class UiStore {
	constructor(parentStore) {
		this.parentStore = parentStore;
	}
}