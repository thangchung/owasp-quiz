import React, { Component } from 'react';
import { observable, action } from "mobx";
import { observer, inject, connect } from 'mobx-preact';
import { Welcome, Quiz, Score } from '../../components';

import styled from 'styled-components';

const WelcomeContainer = styled.div`
	padding: 80px 20px;
	min-height: 100%;
	width: 100%;
`;

@inject('store')
export default class Exam extends Component {
  constructor(props) {
    super(props);
    this.localUiStore = this.props.store.uiStore;
    this.examStore = this.props.store.examStore;
  }

  render() {
    return (
      <WelcomeContainer>
        <Welcome store={this.examStore} />
        <Score store={this.examStore} />
        <Quiz store={this.examStore} />
      </WelcomeContainer>
    );
  }
}
