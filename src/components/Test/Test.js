import React, { useState } from 'react'
import Controller from './Controller';
import Question from './Question';
import TestOver from './TestOver'
import './Test.css';

const question_data = [
    {
        id: 1,
        question: "What is SI Unit of distance ?",
        A: "metres",
        B: "kilometres",
        C: "centimetres",
        D: "feets",
        isAnswered: false,
        isVisited: false,
        selectedAnswer: null

    },
    {
        id: 2,
        question: "What is SI Unit of time ?",
        A: "metre",
        B: "kilometre",
        C: "seconds",
        D: "minutes",
        isAnswered: false,
        isVisited: false,
        selectedAnswer: null
    },
    {
        id: 3,
        question: "What is the molecular formula of hydrogen ?",
        A: "H",
        B: "He",
        C: "H2",
        D: "H2O",
        isAnswered: false,
        isVisited: false,
        selectedAnswer: null
    },
    {
        id: 4,
        question: "What is the formula for calculating pressure ?",
        A: "F*A",
        B: "F/A",
        C: "F*v",
        D: "None of the above",
        isAnswered: false,
        isVisited: false,
        selectedAnswer: null
    },
    {
        id: 5,
        question: "What is the geometric center of concave mirror ?",
        A: "Center of Curvature",
        B: "Pole",
        C: "Focus",
        D: "Radius of Curvature ",
        isAnswered: false,
        isVisited: false,
        selectedAnswer: null
    },
    {
        id: 6,
        question: "What is the value of tan(45degrees)?",
        A: "1",
        B: "0",
        C: "-1",
        D: "2",
        isAnswered: false,
        isVisited: false,
        selectedAnswer: null
    },
    {
        id: 7,
        question: "What is area of rectangle ?",
        A: "length/breadth",
        B: "2*(length+breadth)",
        C: "length*breadth",
        D: "None of the above",
        isAnswered: false,
        isVisited: false,
        selectedAnswer: null
    },
    {
        id: 8,
        question: "Sum of interior angles of a triangle?",
        A: "180",
        B: "270",
        C: "90",
        D: "360",
        isAnswered: false,
        isVisited: false,
        selectedAnswer: null
    },
    {
        id: 9,
        question: "Number of sides in a octagon ?",
        A: "9",
        B: "5",
        C: "10",
        D: "8",
        isAnswered: false,
        isVisited: false,
        selectedAnswer: null
    },
    {
        id: 10,
        question: "what is the 20th element of periodic table ?",
        A: "K",
        B: "Ar",
        C: "Ca",
        D: "Fe",
        isAnswered: false,
        isVisited: false,
        selectedAnswer: null
    },
    {
        id: 11,
        question: "An ideal gas has molecules with 5 degrees of freedom. The ratio of specific heats at constant pressure (CP) and at constant volume (CV) is ?",
        A: "6",
        B: "7/2",
        C: "5/2",
        D: "7/5",
        isAnswered: false,
        isVisited: false,
        selectedAnswer: null
    },
    {
        id: 12,
        question: "The number of proper subsets of the set {1, 2, 3} is ?",
        A: "8",
        B: "7",
        C: "6",
        D: "5",
        isAnswered: false,
        isVisited: false,
        selectedAnswer: null
    }

];


const pageNumbers = [];
for (let i = 1; i <= question_data.length; i++) {
    pageNumbers.push(i);
}

export default function Test(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [array, setArray] = useState(question_data);

    function changePage(event) {
        setArray((prevState) => {
            const temp = [...prevState];
            temp[currentPage - 1].isVisited = true;
            return temp;
        })
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const answerHandler = (selectedAnswer) => {
        setArray((prevState) => {
            const temp = [...prevState];
            temp[currentPage - 1].selectedAnswer = selectedAnswer;
            temp[currentPage - 1].isAnswered = true;
            return temp;
        })
    }

    const nextPageHandler = () => {
        setArray((prevState) => {
            const temp = [...prevState];
            temp[currentPage - 1].isVisited = true;
            return temp;
        })
        setCurrentPage(currentPage + 1);
    }

    const prevPageHandler = () => {
        setArray((prevState) => {
            const temp = [...prevState];
            temp[currentPage - 1].isVisited = true;
            return temp;
        })
        setCurrentPage(currentPage - 1);
    }
    const submitHandler = () => {
        console.log(currentPage);
        setArray((prevState) => {
            const temp = [...prevState];
            temp[currentPage - 1].isVisited = true;
            return temp;
        })
        props.onTimeOver();
    }

    if (props.isLoggedIn && props.timeOver) {
        return (
            <TestOver onLogout={props.onLogout} array={array} />
        )
    }

    return (
        <React.Fragment>
            <div className="content">
                <Question onTimeOver={submitHandler} currentPage={currentPage} totalQuestions={question_data.length} answerHandler={answerHandler} problem={array[currentPage - 1]} onNext={nextPageHandler} onPrev={prevPageHandler} />
                <div className="side_bar">
                    <Controller currentPage={currentPage} totalQuestions={question_data.length} />
                    <div className="pagination">
                        {
                            pageNumbers.map((item) => (
                                <button
                                    key={item}
                                    className={`number_button ${currentPage === item ? 'active' : ''} ${array[item - 1].isAnswered === true ? 'answered' : ''} ${array[item - 1].isVisited === true ? 'visited' : ''}`}
                                    onClick={changePage}
                                >
                                    {item}
                                </button>
                            ))
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
