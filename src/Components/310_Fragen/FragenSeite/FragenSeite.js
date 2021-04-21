import React, { useState ,useEffect } from 'react';
import FragenAngaben from './components/FragenAngaben';
//import FragenListe from './components/data.json';
import { useHistory } from 'react-router-dom';
import { fetch310Fragen } from '../api/api310Fragen';
import Logo from '../../Testseite/Logo';
import "./style_1.css";


const Fragen = () => {

    const [data, setdata] = useState([]);
    //kann das geprüft werden. 
    //console.log(Liste);
    const [FragenIndex, setFragenIndex] = useState(0);
    //Wenn was geändert werden muss, kann man State benutzen.

    const Vergangenheit  = useHistory()

    //create useEffect für fetch axios, damit wir data von axios benutzen können
    //wenn wir was in useEffect nach return schreiben, wird das uns in erste Load zeigen. 
     useEffect (()=>{
         fetch310Fragen()
         .then(response=>{
              //console.log("what is res? ",res);    //is a data:Array(82)
              setdata(response.data)
         })
         .catch(error=>{
             alert(error.massage)
         })
     },[])
   

    const VorherigeAufgabe = () => {
        if (FragenIndex !== 0)
            setFragenIndex(FragenIndex - 1)

    }

    const NächsteAufgabe = () => {
        if (FragenIndex < data.length - 1)
            setFragenIndex(FragenIndex + 1)


    }

    const zurInfo =()=>{
         Vergangenheit.push(
             "/Info"
         )
    }

    return <div className={"FragenStyle"}>
        <Logo />
        { data.length > 0 && <FragenAngaben   propsFrage={data[FragenIndex]} propsFragenLänge={data.length} propsFragenIndex={FragenIndex +1}></FragenAngaben>}
        <div className={"FooterStyle"}>
        <button onClick={VorherigeAufgabe}>Vorherige Aufgabe</button>
        <button onClick={zurInfo}>Info</button>
        <button onClick={NächsteAufgabe}>Nächste Aufgabe</button>
         </div>
    </div>
}
export default Fragen;