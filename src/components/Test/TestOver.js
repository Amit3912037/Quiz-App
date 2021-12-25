import React from 'react';
import './TestOver.css';

const answersArray = ["1", "3", "3", "2", "2", "1", "3", "1","4","3","4","3"];

export default function TestOver(props) {

    let attempted = 0;
    let correct = 0;
    let wrong = 0;
    let visited = 0;
    let total = answersArray.length;

    for (let i = 0; i < total; i++) {
        if (props.array[i].isVisited) {
            visited++;
        }
        if (props.array[i].selectedAnswer) {
            attempted++;
            if (props.array[i].selectedAnswer === answersArray[i]) {
                correct++;
            }
            else {
                wrong++;
            }
        }
    }
    return (
        <div className='testover_container'>

            <h1>Your score is {correct}/{total}</h1>
            <div className='result_visited'>No of questions visited : <b>{visited}</b> </div>
            <div className='result_attempted'>No of questions attempted : <b>{attempted}</b></div>
            <div className='result_correct'>No of correct answers : <b>{correct}</b></div>
            <div className='result_wrong'>No of wrong answers : <b>{wrong}</b></div>
            <h3>Thanks for taking test</h3>
            <button className='logout_button' onClick={props.onLogout}>Logout</button>
        </div>
    )
}
