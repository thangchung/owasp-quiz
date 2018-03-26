import UiStore from './global/store';
import ProfileStore from './profile/store';

class RootStore {
  constructor() {
    this.profileStore = new ProfileStore(this);
    this.uiStore = new UiStore(this);
  }
}

export const store = new RootStore();