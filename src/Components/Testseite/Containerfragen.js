import './Containerfragen.css'
import React, {useState} from 'react';


const Containerfragen = ({questionData}) => {

    const [showAns, setShowAns] = useState({
        show: false,
        optionSelected: undefined
    })

    const handleClickOnOption = (option) => {
        setShowAns({
            show: true,
            optionSelected: option
        })
    }


    return (
        <div className={"question_container"}>
            <h1>Aufgabe {questionData.nr} / 33</h1> <br /> <p> {questionData.text}</p>
           <div className="containerButton">
            <ul>
                {questionData.options.map(item => <li>
                    <button className="buttonFragen" onClick={() => handleClickOnOption(item)}>
                        {item.title}

                    </button>
                    {showAns.show && <span>{item.isAns ? <p className="fragenFeedback">Richtige Antwort <i class="fas fa-check-circle"></i></p> : <p className="fragenFeedback">Falsche Antwort</p>}</span>}
                    
                </li>)}
            </ul>
            </div>
        </div>
    );
};

export default Containerfragen;
