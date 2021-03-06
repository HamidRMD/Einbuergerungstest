import "./ergebnis.css"
import Logo from './Logo';
import { useHistory } from 'react-router-dom'
import { useState, useEffect } from "react"


const Ergebnis = () => {
    const [punktZahl, setpunktZahl] = useState(null)
    const [bestanden, setBestanden] = useState(false)
    useEffect(() => {
        if (punktZahl === null) {
            let speicher = localStorage.getItem("testpunkte")
            if (speicher >= 17) {
                setBestanden(true)
            }
            setpunktZahl(speicher)
        }


    }, [punktZahl])

    const Vergangenheit = useHistory()

    const Testvorbereitung = () => {
        //console.log("Testvorbereitung!")
        Vergangenheit.push(
            "/Fragen"
        )
    }

    const Testwiederholen = () => {
      
        Vergangenheit.push(
            "/Test"
        )
    }
    return (
        <div className="body-Ergebnis">
            <Logo />

            <div className="ergebnisContent">
            {bestanden ?
                
                <h1 className="begrüßung">Herzlichen Glückwünsch!</h1>
                : 
                <h1 className="begrüßung">Es tut mir Leid!</h1>
                }
                
            <p className="ergebnisErklärung">Sie haben die prüfung {!bestanden ? "nicht" : ""}  bestanden  und Sie haben {punktZahl} fragen  von 33 richtig beantwortet.</p>

            {bestanden ?
                <h2 className="bestandenOderNicht">Bestanden</h2>
                : <h2 className="bestandenOderNicht">Nicht Bestanden</h2>}

            <div id="punktZahlContainer">
            <div className="punktZahlDiv"><p className="punktZahl">{punktZahl}</p></div>
            </div>

            <p id="punktStr">Punkte</p>

            </div>
           
            <div id="containerErgebnisButton">
            <button className="buttonstyle" onClick={Testwiederholen}>Test wiederholen</button>
            <button className="buttonstyle" onClick={Testvorbereitung}>Test vorbereitung</button>
            </div>

        </div>

    )
}

export default Ergebnis