import { h, Component } from 'preact';
import styled from 'styled-components';

const WelcomeContainer = styled.div`
	padding: 80px 20px;
	min-height: 100%;
	width: 100%;
`;

export default ({ children, ...props }) => (
  <WelcomeContainer>
    <div class="columns">
      <article class="tile">
        <div class="content">
          <p class="title">Web Security Quiz</p>
          <div class="content">
            <p>How good is your Web Security knowledge?</p>
            <p>In the following Quiz you can test yourself with Questions from the <a target="_blank" href="https://www.owasp.org/index.php/OWASP_Top_10_Threats_and_Mitigations_Exam_-_Single_Select">OWASP Top 10 Threats and Mitigations Exam.</a>
              To pass the quiz you need to get 70% of the answers correct. 7 questions are picked randomly for every attempt.</p>
            <input class="button is-primary is-outlined" type="button" value="Start" />
          </div>
        </div>
      </article>
    </div>
  </WelcomeContainer>
);