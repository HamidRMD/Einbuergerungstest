import React, { useState, useEffect } from 'react';
import FragenAngaben from './components/FragenAngaben';
//import FragenListe from './components/data.json';
import { useHistory } from 'react-router-dom';

const Fragen = () => {

    const [data, setdata] = useState([]);
    //kann das geprüft werden. 
    //console.log(data);
    const [FragenIndex, setFragenIndex] = useState(0);
    //Wenn was geändert werden muss, kann man State benutzen.

    const Vergangenheit = useHistory()
    //für InfoSeite

    const [filterData , setFilterData] = useState([]) 



    //create useEffect für fetch axios, damit wir data von axios benutzen können
    //wenn wir was in useEffect nach return schreiben, wird das uns in erste Load zeigen. 
    useEffect(() => {
       
    }, [])


    const VorherigeAufgabe = () => {
        if (FragenIndex !== 0)
            setFragenIndex(FragenIndex - 1)

    }

    const NächsteAufgabe = () => {
        if (FragenIndex < data.length - 1)
            setFragenIndex(FragenIndex + 1)


    }

    const zurInfo = () => {
        Vergangenheit.push(
            "/Info"
        )
    }

    const clickAlleFragen =()=>{
         setFilterData(data)
    }

    const clickAlleStates =(event  )=>{
          //console.log("event : ",event) 
          //console.log("value", event.target.value);

          if(event.target.value === "Alle Fragen")
          setFilterData(data)
          else
          setFilterData(data.filter(item=>item.stats===event.target.value))

    }

    return <div className={"FragenStyle"}>
    
        <div className={"alleFargenStyle"}>
        <button onClick={clickAlleFragen}>
            {"Alle Fragen"}
        </button>

        <select onChange={clickAlleStates}>
        </select>
        </div>
        
        {filterData.length > 0 && <FragenAngaben propsFrage={filterData[FragenIndex]} propsFragenLänge={filterData.length} propsFragenIndex={FragenIndex + 1}></FragenAngaben>}
        
        <div className={"FooterStyle"}>
            <button onClick={VorherigeAufgabe}>Vorherige Aufgabe</button>
            <button onClick={zurInfo}>Info</button>
            <button onClick={NächsteAufgabe}>Nächste Aufgabe</button>
        </div>
        
    </div>
}
export default Fragen;