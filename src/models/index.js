import UiState from './global/state';
import ProfileState from './profile/state';

class RootStore {
  constructor() {
    this.profileState = new ProfileState(this);
    this.uiState = new UiState(this);
  }
}

export const store = new RootStore();