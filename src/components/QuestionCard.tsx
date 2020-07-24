import React from 'react';

type Props =  {
    question: string;
    answer: string[];
    callBack: any;
    userAnswer: string;
    questionNr: number;
    totalQuestions : number;
}
 
const QuestionCard: React.FC<Props> = ({ question,
     answer, 
     callBack, 
     userAnswer,
     questionNr,
     totalQuestions
    }) => (<div>
        <p className="number">
            question: {questionNr}
        </p>
        </div>)

export default QuestionCard;