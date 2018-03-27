import React, { Component } from 'react';
import { observable, action } from "mobx";
import { observer, } from 'mobx-preact';
import { Button } from 'mdbreact';

@observer
export default class Welcome extends Component {

  @action
  startSubmit = e => {
    const { maxQuiz } = this.props.store;
    this.props.store.changeStep(2);
    this.props.store.resetExam(maxQuiz);
  }

  render() {
    return (
      <div>
        {this.props.store.currentStep == 1 &&
          <div class="columns">
            <article class="tile">
              <div class="content">
                <p class="title">Web Security Quiz</p>
                <div class="content">
                  <p>How good is your Web Security knowledge?</p>
                  <p>In the following Quiz you can test yourself with Questions from the <a target="_blank" href="https://www.owasp.org/index.php/OWASP_Top_10_Threats_and_Mitigations_Exam_-_Single_Select">OWASP Top 10 Threats and Mitigations Exam.</a>
                    To pass the quiz you need to get 70% of the answers correct. Seven questions are picked randomly for every attempt.</p>
                  <Button size="sm" color="dark-green" onClick={this.startSubmit}>Start</Button>
                </div>
              </div>
            </article>
          </div>
        }
      </div>
    );
  }
}
