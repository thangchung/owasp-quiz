import React, { Component } from 'react';
import { connect } from 'mobx-preact';
import { Welcome, Quiz, Score } from '../../components';

@connect(['store'])
export default class Exam extends Component {
  constructor(props) {
    super(props);
    this.localUiStore = this.props.store.uiStore;
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
