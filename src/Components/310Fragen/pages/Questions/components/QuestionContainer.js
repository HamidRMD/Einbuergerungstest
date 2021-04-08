import React, {useState} from 'react';

const QuestionContainer = ({questionData}) => {

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
            <p>310 Questions</p>
            <p>{questionData.text}</p>
            <ul>
                {questionData.options.map(item => <li>
                    <button onClick={() => handleClickOnOption(item)}>
                        {item.title}
                    </button>
                    {showAns.show && <span>{item.isAns ? "correct" : "incorrect"}</span>}
                </li>)}
            </ul>
        </div>
    );
};

export default QuestionContainer;
