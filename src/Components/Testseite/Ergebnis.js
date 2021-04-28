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
            if (speicher >= 20) {
                setBestanden(true)
            }
            setpunktZahl(speicher)
        }


    }, [punktZahl])

    const Vergangenheit = useHistory()
    
    const Testvorbereitung=()=>{
        console.log("Testvorbereitung!")
        Vergangenheit.push(
            "/Fragen"
        )
    }
  
    const Testwiederholen=()=>{
        console.log("Testwiederholen!")
        Vergangenheit.push(
            "/Test"
        )
    }
    return (
        <div className="body-Ergebnis">
            <Logo/>
            <h1>Herzlich Glückwüunch</h1>
            {bestanden ?
                <p>Sie haben die prüfung bestanden</p>
                : <p>Sie haben die prüfung bestanden</p>}

        <button className="buttonstyle" onClick={Testwiederholen}>Test wiederholen</button>
       <p>Punkte</p>
        <button className="buttonstyle" onClick={Testvorbereitung}>Test vorbereitung</button>
        </div>

    )
}

export default Ergebnis