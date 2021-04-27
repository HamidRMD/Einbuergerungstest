//kinderteil
import './TestSeite.css'
import React, { useState, useEffect } from 'react';

const Containerfragen = ({ propsQuestion, propsQuestionLänge, propsQuestionIndex, antwortHandler }) => {
    const [showAnswer, setshowAnswer] = useState({

        show: false,
        optionSelected: undefined
    })

   // const [nutzerantwort, setnutzerantwort] = useState(false)

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
    /*  
  const richtgeanwortauswählen=()=>{
      if (propsQuestion.correct === answerIndex) {
          console.log("corretanswer1=")
          setnutzerantwort(true)
      }
  }
  
  */
    return (
        <div className="FragenAngaben">

            <h1 className={"FragenAngabenText"}>Test:{propsQuestionIndex} / {propsQuestionLänge}</h1>
            <p className={"FragenAngabenText"}>{propsQuestion.question}</p>
            {propsQuestion.image &&
                <img src={"http://localhost:5000/images/" + propsQuestion.image} alt="ein Bild" />

            }

            <ul>
                {propsQuestion.answer.map((answerItem, answerIndex) =>

                    <li id="liste">

                        <button onClick={() => {

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

                        }}>{answerItem}</button>


                        {showAnswer.show && propsQuestion.correct === answerIndex && showAnswer.optionSelected === answerItem && <span className="text-success">{"Richtige Antwort"}</span>}
                        {showAnswer.show && showAnswer.optionSelected === answerItem && propsQuestion.correct !== answerIndex && <span className="text-danger">{"Falsche Antwort"}</span>}
                    </li>
                )}
            </ul>

        </div>
    )
}

export default Containerfragen