import './TestSeite.css'
import Logo from './Logo';
import Uhr from "./Uhr";
import Containerfragen from "./Containerfragen";
import fragenList from './data.json';
import {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom'




const Test = () => {

    const [data, setData] = useState(fragenList);
    const [questionIndex, setQuestionIndex] = useState(0)
    const history = useHistory();

    useEffect(() => {
        console.log(data)
    }, [])
/*
    useEffect(() => {    
        if (data.length===0) {
          fetch("/questions").then( (Response) => {
            
            Response.json().then( antwort => {
              
                setData(antwort);
            })
          }).catch( fehler => { console.error(fehler)});
        }
      });
      */

    const handleLastQuestion = () => {
        if (questionIndex !== 0)
            setQuestionIndex(questionIndex - 1);
    }
    const handleNextQuestion = () => {
        if (questionIndex < data.length - 1)
            setQuestionIndex(questionIndex + 1);
    }

    const handleClickOnInfoButton = () => {
        history.push("/info",{
            text : data[questionIndex].info
        })
    }



    return (
        <div>
      <Uhr />
      <Logo />
       <div className="container">
        <Containerfragen questionData={data[questionIndex]}/>
        <div>
            <div className="containerButtonUnten">
            <button className="nextAndLastButton" onClick={handleLastQuestion}>Vorherige Frage</button>
            <button className="infoButton" onClick={handleClickOnInfoButton}>Info</button>
            <button className="nextAndLastButton" onClick={handleNextQuestion}>Nächste Aufgabe</button>
            </div>

        </div>
       
       </div>
       
       </div>
       
    )

}

export default Test;