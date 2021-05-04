

//elternteil 
import Logo from './Logo';


import Containerfragen from "./Containerfragen";
import { useState } from "react";
import { useHistory } from 'react-router-dom'


const Test = () => {

    const [data, setData] = useState([]);

    const [zeit, setZeit] = useState(3600);
    const [timeabgelaufen, setTimeabgelaufen] = useState(false)
    const [questionIndex, setQuestionIndex] = useState(0)
    const [testläuft, setTestläuft] = useState(false)
    const [showuhrzeittext, setshowuhrzeittext] = useState(false)
    const [showuhr, setUhr] = useState(false)
    const [anzahlrichtige, setanzahlrichtige] = useState(0)
    const [ergebnis, setErgebnis] = useState([])
    const Vergangenheit = useHistory()

    const Testbeenden = () => {
        const summe = ergebnis.reduce((zwischenSumme, aktullewert) => {
            if (aktullewert) {
                zwischenSumme = zwischenSumme + 1

            }
            return zwischenSumme

        }, 0
            //},0 ist startwert ist 0 für reducer
        )
        localStorage.setItem("testpunkte", summe)

        Vergangenheit.push(
            "/Ergebnis"
        )
    }
    const teststarten = () => {
        setshowuhrzeittext(true)
        setUhr(true)
        setTestläuft(true)
        const land = document.querySelector("#stats").value;
       

        Promise.all([
            fetch(process.env.REACT_APP_BACKENDURL + "RandomQuestion").then(res => res.json()),
            fetch(process.env.REACT_APP_BACKENDURL + `RandomQuestion/${land}`).then(res => res.json())

        ]).then(([urlOneData, urlTwoData]) => {
            console.log("urlOneData=", urlOneData)
            console.log("urlTwoData=", urlTwoData)
            console.log("mergedData=", [...urlOneData, ...urlTwoData])
            setData([...urlOneData, ...urlTwoData]);

            const delay = 1000;
            const AktualiesiereTimer = () => {
                console.log("timer=", zeit)
                setZeit((zeit) => {
                    if (zeit <= 0) {
                        setTimeabgelaufen(true)
                        Testbeenden()
                        return 0
                    }
                    return zeit - 1
                })

            }

            window.setInterval(AktualiesiereTimer, delay)


        })
            .catch((error) => {
                console.log("error!=" + error)
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



    const aktualisreErgebnis = (antwort, indexfrage) => {

        let copyergebnis = [...ergebnis]
        copyergebnis[indexfrage] = antwort
        setErgebnis(copyergebnis)
    }


    const results = () => {

        const summe = ergebnis.reduce((zwischenSumme, aktullewert) => {
            if (aktullewert) {
                zwischenSumme = zwischenSumme + 1

            }
            return zwischenSumme

        }, 0
            //},0 ist startwert ist 0 für reducer
        )
        console.log("summe=", summe)

        setanzahlrichtige(summe)


    }

    return (


        <div className="body-testSeite">
            <Logo />

            {!testläuft ?

                <div className="bundesländer">
                    <label id="bundesländerselect">Bundesländer auswählen : </label>
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
                </div>

                : ""}

            {!timeabgelaufen ?

                <div className="teststarten">
                    {!testläuft ?

                        <button id="teststarten" onClick={teststarten}>Test starten</button>

                        : ""}

                    <div className="container-testSeite">
                        <div id="divUhr">
                            {showuhrzeittext ?
                                <p className="uhrHeading">Uhrzeit</p>
                                : ""}
                            {showuhr ?
                               <div id="uhrDivZahl"> <p className="uhrZahlen">{Math.floor(zeit / 60 )}:{zeit % 60}</p></div>

                                : ""}
                        </div>

                        {data.length > 0 && <Containerfragen propsQuestion={data[questionIndex]}

                            propsQuestionLänge={data.length}
                            propsQuestionIndex={questionIndex}
                            antwortHandler={aktualisreErgebnis}
                        >

                        </Containerfragen>}
                        {testläuft ?

                            <div className="testläuft">
                                <div className="containerButton">
                                    <button className="nextAndLastButton" onClick={VorherigeAufgabe}>Vorherige Aufgabe</button>
                                    <button className="nextAndLastButton" onClick={Testbeenden}>Test beenden</button>
                                    <button className="nextAndLastButton" onClick={NächsteAufgabe}>Nächste Aufgabe</button>
                                </div>

                              
                                {anzahlrichtige ?  
                                       
                                        <button  onClick={results}> </button>
                                    : ""}



                                

                            </div>


                            : " "}


                    </div>


                </div>

                : <p>zeit ist um</p>}



        </div>




    )

}

export default Test;



