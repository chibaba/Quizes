

import  { shuffleArray } from './utils';
export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answer: string[];
    question: String;
    type: String
}

export type QuestionState = Question & { answers: string[]}



export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD  = "hard",
}


export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty)  => {
 
      const endPoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
      const data = await (await fetch (endPoint)).json(); 
      
      return data.results.map((question: Question) => (
          {
              ...question,
              answer: shuffleArray
          }
      ))
 }