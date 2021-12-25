import React, { useState } from 'react';
import Option from './Option'
import './Question.css';

const Question = (props) => {
    const [ticked, setTicked] = useState(false);

    const clickHandler = (event) => {
        if (!ticked) {
            props.answerHandler(event.target.id);
            setTicked(true);
        }
        else {
            if (props.problem.selectedAnswer === event.target.id) {
                props.answerHandler(null);
                setTicked(false);
            }
            else {
                props.answerHandler(event.target.id);
            }
        }
    }

    const nextQuestion = () => {
        props.onNext();
    }

    const prevQuestion = () => {
        props.onPrev();
    }

    return (
        <div className="ques_body">
            <div className="question">
                <h4>Question {props.problem.id}</h4>
                <p>{props.problem.question}</p>
            </div>
            <Option id="1" clickHandler={clickHandler} optionText={props.problem.A} selectedAnswer={props.problem.selectedAnswer} />
            <Option id="2" clickHandler={clickHandler} optionText={props.problem.B} selectedAnswer={props.problem.selectedAnswer} />
            <Option id="3" clickHandler={clickHandler} optionText={props.problem.C} selectedAnswer={props.problem.selectedAnswer} />
            <Option id="4" clickHandler={clickHandler} optionText={props.problem.D} selectedAnswer={props.problem.selectedAnswer} />

            <div className="actions">
                <button disabled={props.problem.id === 1} className={`${props.problem.id === 1 && 'disabled'}`} onClick={prevQuestion}>Prev</button>
                <button disabled={props.problem.id === props.totalQuestions} className={`${props.problem.id === props.totalQuestions && 'disabled'}`} onClick={nextQuestion}>Next</button>
            </div>
            {props.currentPage === props.totalQuestions &&
                <div className="submit_button">
                    <button onClick={props.onTimeOver}>Submit Test</button>
                </div>
            }
        </div>
    )
}

export default Question;