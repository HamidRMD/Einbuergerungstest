import "./ergebnis.css"

import Logo from './Logo';
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
    return (
        <div className="body-Ergebnis">
            <Logo/>
            <h1>Herzlich Glückwüunch</h1>
            {bestanden ?
                <p>Du hast bestanden</p>
                : <p>du hast nicht bestanden</p>}
        <button>Test wiederholen</button>
        <button>Test vorbereitung</button>
        </div>

    )
}

export default Ergebnis