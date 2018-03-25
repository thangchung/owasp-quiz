import { observable, action } from 'mobx';

export default class UiState {
	constructor(parentState) {
		this.parentState = parentState;
	}
}