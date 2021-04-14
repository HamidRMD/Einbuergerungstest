import React, { useState ,useEffect} from 'react';

const FragenAngaben = ({ propsFrage, propsFragenLänge, propsFragenIndex }) => {

      const [showAns, setshowAns] = useState({
            //damit die Antwort sehen
            show: false,
            optionSelected: undefined
      })


      const Auswertung = (Auswahl) => {
            //console.log('wurde Auswahl geklickt', Auswahl);

            // if (answer.isAns) {
            //       alert('Die Antwort ist richtig')
            // }
            // else
            // alert('Die Antwort ist falsch')
            setshowAns({
                  show: true,
                  optionSelected: Auswahl.answer
            })

      }

      useEffect(() => {
            return () => {
                  setshowAns( {
                        show : false,
                        optionSelected : undefined
                  })
            }
      }, [propsFragenIndex])

      return <div>
            <h3>Frage {propsFragenIndex} / {propsFragenLänge}</h3>
            <p>{propsFrage.question}</p>
            <ul>
                  {propsFrage.answers.map(item =>
                        <li>
                              <button onClick={() => Auswertung(item)}>{item.answer}</button>
                              {showAns.show && item.isAns && <span>{"richtig"}</span>}
                              {showAns.show && showAns.optionSelected===item.answer && !item.isAns && <span>{"falsch"}</span>}

                        </li>
                  )}
            </ul>

      </div>
}
export default FragenAngaben;