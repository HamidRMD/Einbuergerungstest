import React, { useState, useEffect } from 'react';
import FragenAngaben from './components/FragenAngaben';
//import FragenListe from './components/data.json';
import { Link} from 'react-router-dom';
import { fetch310Fragen } from '../api/api310Fragen';
import Logo from '../../Testseite/Logo';
import "./style_1.css";


const states = ["Allgemein", "Baden-Württemberg", "Bayern", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hessen", "Mecklenburg-Vorpommern", "Niedersachsen", "Nordrhein-Westfalen", "Rheinland-Pfalz", "Saarland", "Sachsen", "Sachsen-Anhalt", "Schleswig-Holstein", "Thüringen"]



const Fragen = () => {

    const [data, setdata] = useState([]);
    //kann das geprüft werden. 
    //console.log(data);
    const [FragenIndex, setFragenIndex] = useState(0);
    //Wenn was geändert werden muss, kann man State benutzen.

    //const Vergangenheit = useHistory()
    //für InfoSeite

    const [filterData, setFilterData] = useState([])



    //create useEffect für fetch axios, damit wir data von axios benutzen können
    //wenn wir was in useEffect nach return schreiben, wird das uns in erste Load zeigen. 
    useEffect(() => {
        fetch310Fragen()
            .then(response => {
                //console.log("what is res? ",res);    //is a data:Array(82)
                setdata(response.data)
                setFilterData(response.data)
            })
            .catch(error => {
                alert(error.massage)
            })
    }, [])

    const VorherigeAufgabe = () => {
        if (FragenIndex !== 0)
            setFragenIndex(FragenIndex - 1)

    }

    const NächsteAufgabe = () => {
        if (FragenIndex < filterData.length - 1)
            setFragenIndex(FragenIndex + 1)


    }

    

    const clickAlleFragen = () => {
        setFilterData(data)
    }

    const clickAlleStates = (event) => {
        //console.log("event : ",event) 
        //console.log("value", event.target.value);
        setFragenIndex(0)
        if (event.target.value === "Allgemein")
            setFilterData(data)
        else
            setFilterData(data.filter(item => item.stats === event.target.value))

    }

    return <div className={"FragenStyle"}>
        <Logo />
        <div className={"alleFargenStyle"}>
        <Link to={"/"}><button className={"zurück"}>Zurück</button></Link>
        

            <select onChange={clickAlleStates}>
                {states.map(item => <option>{item}</option>)}
            </select>
        </div>

        {filterData.length > 0 &&
            <div className={"cardStyle"}>
                <FragenAngaben propsFrage={filterData[FragenIndex]} propsFragenLänge={filterData.length} propsFragenIndex={FragenIndex +1}></FragenAngaben>

                <div className={"FooterStyle"}>
                    <button className={"vorherigeAufgabe"} onClick={VorherigeAufgabe}>Vorherige Aufgabe</button>
                    
                    <button className={"nächsteAufgabe"} onClick={NächsteAufgabe}>Nächste Aufgabe</button>
                </div>
            </div>
        }
    </div>
}
export default Fragen;