import { h, Component } from 'preact';
import { observer, inject } from 'mobx-preact';
import { Welcome, Quiz, Score } from '../../components';

@inject('store')
@observer
export default class Exam extends Component {
  constructor(props) {
    super(props);
    this.localUiState = this.props.store.uiState;
  }

  render() {
    return (
      <div>
        <Welcome />
        <Quiz />
        <Score />
      </div>
    );
  }
}
