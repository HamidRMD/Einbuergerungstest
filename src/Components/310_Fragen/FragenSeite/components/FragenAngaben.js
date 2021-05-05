import React, { useState, useEffect } from 'react';
import "../style_1.css";

//img src={"http://localhost:5000/images/"+ propsFrage.image} alt={"photos"}/>
const FragenAngaben = ({propsFrage, propsFragenLänge, propsFragenIndex } ) => {

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

      const answerClass =(answerItem , answerIndex)=>{
             if (showAns.show && propsFrage.correct === answerIndex && showAns.optionSelected === answerItem)
                  return "richtige_Antwort"
                  else if (showAns.show && showAns.optionSelected === answerItem &&  propsFrage.correct !== answerIndex)
                  return "falsche_Antwort"
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
     

      return <div className={"AngabenStyle"}>
            <h4 >Frage {propsFragenIndex}  /  {propsFragenLänge}<span className={"stats_Style"}>{propsFrage.stats}</span></h4>
            <hr></hr>
            <p >{propsFrage.question}</p>
            { propsFrage.image &&  <img src={process.env.REACT_APP_BACKENDURL + "images/"+ propsFrage.image} alt={"photos"}/> }
            
                   
            <ul>

                  {propsFrage.answer.map((answerItem, answerIndex) =>
                        <li key={answerIndex} className={answerClass(answerItem , answerIndex)}
                               onClick={() => AnalyzeClickOnButton(answerItem)}>{answerItem}

                              {showAns.show && propsFrage.correct === answerIndex && showAns.optionSelected === answerItem && <span className={"richtige_Antwort"}>{"Richtige Antwort"}<i class="fas fa-check-circle"></i></span>}
                              {showAns.show && propsFrage.correct === answerIndex && showAns.optionSelected !== answerItem &&<span className={"extra"}>{"wäre die Richtige Antwort"}<i class="fas fa-check-circle"></i></span>}
                              {showAns.show && showAns.optionSelected === answerItem &&  propsFrage.correct !== answerIndex && <span className={"falsche_Antwort"}>{"Falsche Antwort"}<i class="fas fa-times-circle"></i></span>}

                        </li>
                  )}
            </ul>

      </div>
}
export default FragenAngaben;