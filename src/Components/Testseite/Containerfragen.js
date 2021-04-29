//kinderteil


import './TestSeite.css'

import React, { useState, useEffect } from 'react';

const Containerfragen = ({ propsQuestion, propsQuestionLänge, propsQuestionIndex, antwortHandler }) => {


    const [showAnswer, setshowAnswer] = useState({

        show: false,
        optionSelected: undefined
    })

   

    useEffect(() => {
        setshowAnswer({
            show: false,
            optionSelected: undefined

        })

    }, [])

    const anwserButton = (option) => {

        setshowAnswer({
            show: true,
            optionSelected: option
        })
        

    }

    return (
        <div className="FragenAngaben">
         
            <h1 className="Anzahlfrage">Aufgabe: {propsQuestionIndex + 1} / {propsQuestionLänge}</h1>
            <p className="FragenAngabenText">{propsQuestion.question}</p>
            {propsQuestion.image &&
                <img src={"http://localhost:5000/images/" + propsQuestion.image} alt="ein Bild" />

            }

            <ul>
                {propsQuestion.answer.map((answerItem, answerIndex) =>

                    <li id="liste">
                        <button id="antwortButton" onClick={() => {

                            anwserButton(answerItem);
                            //wie kann ich die richtige antwort erknennen
                            // wie kann ich diese anwrt array im ergerbis (true oder false) speichern
                            if (propsQuestion.correct === answerIndex) {
                                console.log("corretanswer1=")
                                antwortHandler(true, propsQuestionIndex)

                            }

                            else {
                                antwortHandler(false, propsQuestionIndex)
                            }

                        }}>{answerItem}
                         &nbsp; 
                           {showAnswer.optionSelected ===answerItem ? <i class="fas fa-check-circle"></i> : ""}
                        </button>
                     
                  

                        {showAnswer.show && propsQuestion.correct === answerIndex && showAnswer.optionSelected === answerItem}
                        {showAnswer.show && showAnswer.optionSelected === answerItem && propsQuestion.correct !== answerIndex}

                    </li>
                )}
            </ul>
        </div>

    )
}

export default Containerfragen