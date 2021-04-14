import React, { useState } from 'react';
import FragenAngaben from './components/FragenAngaben';
import FragenListe from './components/data.json';
import { useHistory } from 'react-router-dom';

const Fragen = () => {

    const [Liste, setListe] = useState(FragenListe);
    //kann das geprüft werden. 
    //console.log(Liste);
    const [FragenIndex, setFragenIndex] = useState(0);
    //Wenn was geändert werden muss, kann man State benutzen.

    const Vergangenheit  = useHistory()

    const VorherigeAufgabe = () => {
        if (FragenIndex !== 0)
            setFragenIndex(FragenIndex - 1)

    }

    const NächsteAufgabe = () => {
        if (FragenIndex < Liste.length - 1)
            setFragenIndex(FragenIndex + 1)


    }

    const zurInfo =()=>{
         Vergangenheit.push(
             "/Info"
         )
    }

    return <div>
        <h1>Fragen Seite</h1>
        <FragenAngaben  propsFrage={Liste[FragenIndex]} propsFragenLänge={Liste.length} propsFragenIndex={FragenIndex +1}></FragenAngaben>
        <button onClick={VorherigeAufgabe}>Vorherige Aufgabe</button>
        <button onClick={zurInfo}>Info</button>
        <button onClick={NächsteAufgabe}>Nächste Aufgabe</button>
    </div>
}
export default Fragen;