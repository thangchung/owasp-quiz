import React, { Component } from 'react';
import { observable, action } from "mobx";
import { observer, } from 'mobx-preact';
import { Button } from 'mdbreact';

@observer
export default class Score extends Component {

  @action
  resetSubmit = e => {
    this.props.store.changeStep(1);
  }

  render() {
    const { currentStep } = this.props.store;

    return (
      <div>
        {currentStep == 3 &&
          <div>
            <p>Score</p>
            <Button size="sm" color="elegant" onClick={this.resetSubmit}>Reset</Button>
          </div>
        }
      </div>
    );
  }
}