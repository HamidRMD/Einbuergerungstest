import './StartSeite.css'
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Testseite/Logo'
import AboutUs from './AboutUs'



const Start =()=>{

      return <div >
<h1 >Start Seite</h1>
<div className="startSeite-body">
<Logo /> 
<AboutUs />
<div className="startSeite-Content">
<h1 className="heading-startSeite">Einbürgerungstest</h1>
<Link to={"/Zurück"}><button>Test Vorbereitung</button></Link>
<Link to={"/Login"}><button>Start den Test</button></Link>
<Link to={"/Bewertung"}><button className="startSeite-button">Start den Test</button></Link>
   
 </div>
      </div>
      

      </div>

}

export default Start;