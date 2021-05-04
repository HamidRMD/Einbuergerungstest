import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../Testseite/Logo';
import '../FragenSeite/style_2.css'
import "../FragenSeite/style_1.css";




const Zurück = () => {
    return (
        <div className={"body"}>
            <Logo />
            <Link to={"/Fragen"}><button className="zurFragen">zur Fragen</button></Link>
            <video className={"runVideo"} controls loop muted autoPlay width={300} height={200}
            style={{
                //backgroundImage:"unset",
                position: "absolute",
                width: "40%",
                height:'100vh',
                paddingBottom:'20vh',
               paddingLeft:'110vh',
                zIndex: 8,
                opacity: 0.9
            }}>
                <source src={"/Darkom.mp4"} type={"video/mp4"} ></source>
                
            </video>
            
        </div>

    );

}

export default Zurück