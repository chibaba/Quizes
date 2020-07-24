import React, {useState} from 'react';

import { fetchQuizQuestions } from './API';
import QuestionCard from './components/QuestionCard';
import  {Difficulty} from './API';


const TOTAL_QUESTIONS = 20;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.MEDIUM))

  const startQuiz = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>Quiz</h1>
      <button className="start" onClick={startQuiz}>
        Start
      </button>
      <p className = "score">Score:</p>
      <p>Loading Questions ...</p>
      <QuestionCard 
      // questionNr={number + 1}
      // totalQuestions = {TOTAL_QUESTIONS}
      // question={questions[number].question}
      // answers={questions[number].answers}
      // userAnswer={userAnswers ? userAnswers[number] : undefined}
      // callBack={checkAnswer}
      />
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
