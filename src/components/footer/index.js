import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div class="card-body footer">
        <p>Raise awareness for Web Security by 
          &nbsp;<a target="_blank" href="https://twitter.com/intent/tweet?text=Test%20your%20Web%20Security%20knowledge%20with%20@owasp%20exam%20questions:%20https://github.com/thangchung/owasp-quiz%20by%20@thangchung" target="_blank">tweeting about this quiz</a>, or
          &nbsp;<a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A//github.com//thangchung//owasp-quiz">share it on Facebook</a>.
        </p>
        <p>
          <a target="_blank" href="https://github.com/thangchung/owasp-quiz">Source on Github</a>
        </p>
        <p>
          <a target="_blank" href="https://github.com/thangchung">Built with ♥ by Thang Chung</a>
        </p>
      </div>
    );
  }
}