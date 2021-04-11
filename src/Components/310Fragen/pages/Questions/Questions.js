import './style.css'
import QuestionContainer from "./components/QuestionContainer";
import questionList from './components/data.json';
import {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom'

const QuestionsPage = () => {

    const [data, setData] = useState(questionList);
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

    return <div>
        <h1>Question Page</h1>
        <QuestionContainer questionData={data[questionIndex]}/>
        <div>
            {questionIndex !== 0 && <button onClick={handleLastQuestion}>last question</button>}
            <button onClick={handleClickOnInfoButton}>info</button>
            {questionIndex < data.length - 1 && <button onClick={handleNextQuestion}>next question</button>}
        </div>
    </div>
}

export default QuestionsPage;
