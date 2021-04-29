import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../Testseite/Logo';
import '../FragenSeite/style_2.css'
import "../FragenSeite/style_1.css";




const Zurück = () => {
    return (
        <div>
            <video className={"runVideo"} controls loop muted autoPlay width={300} height={200}>
                <source src={"/Germany9.mp4"} type={"video/mp4"} ></source>
            </video>
            <div className="body" style={{
                //backgroundImage:"unset",
                position: "absolute",
                width: "100%",
                zIndex: 10
            }}>
                <Logo />
                <div className="container">
                    <h1 className={"p-mitte"}>Einbürgerungstest</h1>

                    <p className="paragraph">Alle allgemeine Fragen und Bundesland Fragen für den Test "Leben in Deutschland". Hier finden Sie alle 300 allgemeine Fragen und 10 Bundesland Fragen für den Einbürgerungstest "Leben in Deutschland".</p>


                    
                    <Link to={"/Fragen"}><button className="zurFragen">zur Fragen</button></Link>
                </div>
                
            </div>
        </div>

    );

}

export default Zurück