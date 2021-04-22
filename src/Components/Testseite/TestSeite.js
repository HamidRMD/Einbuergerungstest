import './TestSeite.css'

import Logo from './Logo';

import Punkte from "./Punktezaehler";
import Containerfragen from "./Containerfragen";
import { useState } from "react";
import { useHistory } from 'react-router-dom'
//import axios from 'axios';

const Test = () => {

    const [data, setData] = useState([]);
    const [time, setTime] = useState(60);
    const [questionIndex, setQuestionIndex] = useState(0)

    const Vergangenheit = useHistory()
    /*
     useEffect(() => {
       
         Promise.all([
             fetch("http://localhost:5000/RandomQuestion").then(res => res.json()),
             fetch(`http://localhost:5000/RandomQuestion/${land}`).then(res => res.json())
         ]).then(([urlOneData, urlTwoData]) => {
             console.log("urlOneData=", urlOneData)
             console.log("urlTwoData=", urlTwoData)
             console.log("mergedData=", [...urlOneData, ...urlTwoData])
 
             setData([...urlOneData, ...urlTwoData]);
 
         })
     }, [])
 
 */
    const teststarten = () => {
        const land = document.querySelector("#stats").value;

        Promise.all([
            fetch("http://localhost:5000/RandomQuestion").then(res => res.json()),
            fetch(`http://localhost:5000/RandomQuestion/${land}`).then(res => res.json())
        ]).then(([urlOneData, urlTwoData]) => {
            console.log("urlOneData=", urlOneData)
            console.log("urlTwoData=", urlTwoData)
            console.log("mergedData=", [...urlOneData, ...urlTwoData])
            setData([...urlOneData, ...urlTwoData]);

            const delay = 60000;
            const AktualiesiereTimer = () => {

                setTime(time - 1)
                if (time === 0 ){
                    clearInterval(time)
                    
                }
            }
            window.setInterval(AktualiesiereTimer, delay)



        })
    }


    const VorherigeAufgabe = () => {
        if (questionIndex !== 0)
            setQuestionIndex(questionIndex - 1)

    }

    const NächsteAufgabe = () => {
        if (questionIndex < data.length - 1)
            setQuestionIndex(questionIndex + 1)


    }

    const zurInfo = () => {
        Vergangenheit.push(
            "/Info"
        )
    }


    return (
        <div>

            <div className="body-testSeite">
               <p>du hast  noch {time} zeit! </p>
                <Logo />
                <label>Stats:</label>
                <select id="stats" name="stats">

                    <option value="Baden-Württemberg">Baden-Württemberg </option>
                    <option value="Bayern">Bayern </option>
                    <option value="Berlin">Berlin</option>
                    <option value="Brandenburg">Brandenburg </option>
                    <option value="Bremen">Bremen</option>
                    <option value="Hamburg">Hamburg</option>
                    <option value="Hessen">Hessen</option>
                    <option value="Mecklenburg-Vorpommern">Mecklenburg-Vorpommern</option>
                    <option value="Niedersachsen">Niedersachsen</option>
                    <option value="Nordrhein-Westfalen">Nordrhein-Westfalen</option>
                    <option value="Rheinland-Pfalz">Rheinland-Pfalz</option>
                    <option value="Saarland">Saarland</option>
                    <option value="Sachsen">Sachsen</option>
                    <option value="Sachsen-Anhalt">Sachsen-Anhalt</option>
                    <option value="Schleswig-Holstein">Schleswig-Holstein </option>
                    <option value="Thüringen">Thüringen</option>

                </select>
                <button onClick={teststarten}>Start zum Test</button>
                <div className="container-testSeite">
                    {data.length > 0 && <Containerfragen propsQuestion={data[questionIndex]} propsQuestionLänge={data.length}
                        propsQuestionIndex={questionIndex + 1}>
                    </Containerfragen>}


                    <div>
                        <div className="containerButtonUnten">

                            <button onClick={zurInfo}>Info</button>
                            <button onClick={VorherigeAufgabe}>Vorherige Aufgabe</button>
                            <button onClick={NächsteAufgabe}>Nächste Aufgabe</button>

                        </div>

                    </div>
                </div>


            </div>
            <Punkte />

        </div>

    )

}

export default Test;