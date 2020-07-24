import React from 'react';

type Props =  {
    question: string;
    answers: string[];
    callBack: any;
    userAnswer: any;
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
            question: {questionNr} / {totalQuestions}
        </p>

        <p dangerouslySetInnerHTML ={{ __html: question }} />

        <div>
            {answers.map(answer => (
                <div>
                    <button disabled={userAnswer} onClick={callBack}>
                        <span dangerouslySetInnerHTML={{ __html: answer}} />
                    </button>
                </div>
            ))}

        </div>
        </div>)

export default QuestionCard;