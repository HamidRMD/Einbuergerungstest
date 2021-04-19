import React, { useState, useEffect } from 'react';
import "../style.css"

const FragenAngaben = ({ propsFrage, propsFragenLänge, propsFragenIndex }) => {

      const [showAns, setshowAns] = useState({
            //damit die Antwort sehen
            show: false,
            optionSelected: undefined
      })


      const AnalyzeClickOnButton = (option) => {
            //console.log('wurde Auswahl geklickt', Auswahl);

            // if (answer.isAns) {
            //       alert('Die Antwort ist richtig')
            // }
            // else
            // alert('Die Antwort ist falsch')
            setshowAns({
                  show: true,
                  optionSelected: option
            })

      }

      useEffect(() => {
            return () => {
                  setshowAns({
                        //in erste Load zeig user nicht, sondern check the condition first, when is... 
                        show: false,
                        optionSelected: undefined
                  })
            }
      }, [propsFragenIndex])

      return <div>
            <h3 className={"FragenAngabenText"}>Frage {propsFragenIndex} / {propsFragenLänge}</h3>
            <p className={"FragenAngabenText"}>{propsFrage.question}</p>
            <ul>
                  {propsFrage.answer.map((answerItem, answerIndex) =>
                        <li>
                              <button onClick={() => AnalyzeClickOnButton(answerItem)}>{answerItem}</button>

                              {showAns.show && propsFrage.correct === answerIndex && showAns.optionSelected === answerItem && <span>{"Richtige Antwort"}</span>}
                              {showAns.show && propsFrage.correct === answerIndex && showAns.optionSelected !== answerItem &&<span>{"wäre die Richtige Antwort"}</span>}
                              {showAns.show && showAns.optionSelected === answerItem &&  propsFrage.correct !== answerIndex && <span>{"Falsche Antwort"}</span>}

                        </li>
                  )}
            </ul>

      </div>
}
export default FragenAngaben;