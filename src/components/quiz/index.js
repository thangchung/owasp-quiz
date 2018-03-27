import React, { Component } from 'react';
import { observable, action } from "mobx";
import { observer, } from 'mobx-preact';
import { Button, Progress } from 'mdbreact';
import { RadioGroup, RadioButton } from 'react-toolbox/lib/radio';
import { Snackbar } from 'react-toolbox';

@observer
export default class Quiz extends Component {
  state = {
    value: '',
    showError: false
  };

  @action
  handleChange = (value) => {
    this.setState({ value });
  };

  @action
  nextSubmit = e => {
    e.preventDefault();

    if (!this.state.value) {
      this.setState({ showError: true });
    } else {
      if (this.props.store.currentQuiz <= 10) {
        this.props.store.nextQuiz();
      }

      if (this.props.store.answeredAnswers == 10) {
        this.props.store.changeStep(3);
      }

      this.setState({ showError: false });
      this.setState({ value: '' });
    }
  }

  render() {

    const {
      quiz,
      currentQuiz,
      answeredAnswers,
      computeProgress,
      currentStep
    } = this.props.store;

    return (
      <div>
        {currentStep == 2 &&
          <div>
            <p>
              <Progress value={computeProgress} striped animated color="succeed" size="sm"></Progress>
            </p>

            <p>
              <h5>{currentQuiz}. {quiz.question}</h5>
              <RadioGroup name='answers' value={this.state.value} onChange={this.handleChange}>
                {
                  quiz.answers.map(answer => {
                    return (<RadioButton label={answer} value={answer} />);
                  })
                }
              </RadioGroup>
              <Button size="sm" color="elegant" onClick={this.nextSubmit}>Next</Button>
            </p>

            {this.state.showError &&
              <Snackbar
                label='Please choose one answer!!!'
                active={true}
                type='warning'
              />
            }
          </div>
        }
      </div>
    );
  }
}