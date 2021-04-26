import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';

const Containerfragen = ({ propsQuestion, propsQuestionLänge, propsQuestionIndex,propsImage}) => {
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

    const AnwserButton = (option) => {

        setshowAnswer({
            show: true,
            optionSelected: option
        })

    }

    return (
        <div className="FragenAngaben">

            <h1 className={"FragenAngabenText"}>Test:{propsQuestionIndex} / {propsQuestionLänge}</h1>
            <p className={"FragenAngabenText"}>{propsQuestion.question}</p>
            <img src={"localhost:5000/public/images" + propsImage} alt="ein Bild" height="50" width="60"/>
            <ul>
                {propsQuestion.answer.map((answerItem, answerIndex) =>

                    <li>
                        <button onClick={() => AnwserButton(answerItem)}>{answerItem}</button>


                        {showAnswer.show && propsQuestion.correct === answerIndex && showAnswer.optionSelected === answerItem && <span className="text-success">{"Richtige Antwort"}</span>}
                        {showAnswer.show && showAnswer.optionSelected === answerItem && propsQuestion.correct !== answerIndex && <span className="text-danger">{"Falsche Antwort"}</span>}
                    </li>
                )}
            </ul>


        </div>
    )
}

export default Containerfragen