import './StartSeite.css'
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Testseite/Logo'



const Start =()=>{

      return <div >
<div className="startSeite-body">
<Logo />
<div className="startSeite-Content">
<h1 className="heading-startSeite">Einbürgerungstest</h1>
<Link to={"/Fragen"}><button className="startSeite-button">Test vorbereitung</button></Link>


<Link to={"/Bewertung"}><button className="startSeite-button">Start den Test</button></Link>
   
 </div>
      </div>
      
      </div>

}

export default Start;