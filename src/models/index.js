import UiStore from './global/store';
import ProfileStore from './profile/store';
import ExamStore from './exam/store';

class RootStore {
  constructor() {
    this.profileStore = new ProfileStore(this);
    this.uiStore = new UiStore(this);
    this.examStore = new ExamStore(this);
  }
}

export const store = new RootStore();