import { observable, action, computed } from 'mobx';
import { examData } from '../examData';

export default class ExamStore {

  @observable currentStep = 1; // 1. welcome, 2. exam, 3. score
  @observable maxQuiz = 10; // default is 10

  @observable sourceExams = [];
  @observable exams = [];
  @observable quiz;
  @observable currentQuiz = 1;
  @observable answeredAnswers = 0;

  constructor(parentStore) {
    this.parentStore = parentStore;
    this.sourceExams = examData;
    this.resetExam(this.maxQuiz);
  }

  @action
  changeStep(step) {
    this.currentStep = step;
  }

  @action
  setNumberOfQuiz(maxQuiz) {
    this.maxQuiz = maxQuiz;
  }

  @action
  getCurrentQuiz() {
    if (this.currentQuiz < this.exams.length) {
      return this.exams[this.currentQuiz - 1];
    }
  }

  @action
  resetExam(numQuiz) {
    this.exams = this.sourceExams.sort(function () {
      return 0.5 - Math.random();
    }).slice(0, numQuiz);

    this.currentQuiz = 1;
    this.answeredAnswers = 0;
    this.quiz = this.exams[this.currentQuiz - 1];
  }

  @action
  nextQuiz() {
    if (this.currentQuiz <= this.maxQuiz) {
      this.currentQuiz++;
      this.answeredAnswers++;

      if (this.currentQuiz - 1 < this.exams.length) {
        this.quiz = this.exams[this.currentQuiz - 1];
      }

      console.log(`Current: ${this.currentQuiz}, and answered: ${this.answeredAnswers}`);
    }
  }

  @computed
  get computeProgress() {
    if (!this.exams) {
      return 0;
    }
    return 100 * (this.answeredAnswers + 1) / this.exams.length;
  }
}