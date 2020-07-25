import React from 'react';

//types
import { AnswerObject } from '../App';

//styles
import { wrapper, ButtonWrapper } from './QuestionCard.styles';

type Props =  {
    question: string;
    answers: string[];
    callBack: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions : number;
}
 
const QuestionCard: React.FC<Props> = ({ question,
     answers, 
     callBack, 
     userAnswer,
     questionNr,
     totalQuestions
    }) => (<div>
        <p className="number">
            Question: {questionNr} / {totalQuestions}
        </p>

        <p dangerouslySetInnerHTML ={{ __html: question }} />

        <div>
            {answers.map((answer) => (
                <div key={answer}>
                    <button disabled={!!userAnswer} value={answer} onClick={callBack}>
                        <span dangerouslySetInnerHTML={{ __html: answer}} />
                    </button>
                </div>
            ))}


        </div>
        </div>
        );

export default QuestionCard;