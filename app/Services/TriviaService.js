import { ProxyState } from "../AppState.js";
import { Question } from "../Models/Trivia.js";



class TriviaService {
  async getEasy() {
    let res = await axios.get('https://opentdb.com/api.php?amount=10&difficulty=easy')
    console.log('get Easy questions', res);
    ProxyState.trivia = res.data.results.map(t => new Question(t))
  }
}

export const triviaService = new TriviaService()