import "./ergebnis.css"
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
            <h1>Ergebnis ...</h1>
            {bestanden ?
                <p>Du hast bestanden</p>
                : <p>du hast nicht bestanden</p>}
        </div>
    )
}

export default Ergebnis