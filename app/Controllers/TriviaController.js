import { ProxyState } from "../AppState.js";
import { triviaService } from "../Services/TriviaService.js";

function _drawQuiz(){
  let template = ''
  ProxyState.trivia.forEach(t => template += t.Template)
  document.getElementById('app').innerHTML = template
}



export class TriviaController {
  constructor() {
    console.log('beep boo bop');

    ProxyState.on('trivia', _drawQuiz)
  }

  async easyMode() {
    try {
      await triviaService.getEasy()
    } catch (error) {
      console.error('[Getting easy questions', error)
      PopStateEvent.error(error)
    }

  }

  async nextQuestion(){
    try {
      await triviaService.getNextQuestion()
    } catch (error) {
      console.error('[Getting next question', error)
      Pop.error(error)
    }
  }

  async previousQuestion() {
    try {
      await triviaService.getPreviousQuestion()
    } catch (error) {
      console.error('[Getting previous question', error)
      Pop.error(error)
    }
  }

}