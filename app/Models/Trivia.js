




export class Question {
  constructor({difficulty, category, question, correct_answer, incorrect_answers, type}) {
    this.difficulty = difficulty
    this.category = category
    this.question = question
    this.correctAnswer = correct_answer
    this.incorrectAnswers = incorrect_answers
    this.type = type    
  }

  get Template() {
    return `
  <div class="row p-0 m-0">
    <div class="col-12 mt-5 questionBox text-center p-5">
      <h2>${this.question}</h2>
    </div>
  </div>   
  <div class="row justify-content-between my-3">  
    <button class="col-4 questionBox selectable">A: ${this.incorrectAnswers} </button>
    <button class="col-4 questionBox selectable">B: ${this.correctAnswer} </button>
  </div>
  <div class="row justify-content-between">
    <button class="col-4 questionBox selectable">C: </button>
    <button class="col-4 questionBox selectable">D: </button>
  </div>
    `
  }
}