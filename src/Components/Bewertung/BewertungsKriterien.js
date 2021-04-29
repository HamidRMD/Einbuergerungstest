import './BewertungsKriterien.css'
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Testseite/Logo'


const Bewertung = () => {
    return (
        <div>
            <div className="bodyBewertung">
            <Logo />
           <div className="container-bewertung">
               <h1>Bewertungskriterien</h1>

               <p className="bewertung-paragraph">Bei der Prüfung bekommen Sie ein Testheft mit 33 Fragen. Sie haben 60 Minuten Zeit, die Fragen zu beantworten. Bei jeder Frage müssen Sie aus vier möglichen Antworten die richtige Antwort auswählen. Wenn Sie mindestens 17 Fragen richtig beantworten, haben Sie den Test bestanden.</p>
           
              <Link to={"/Test"}><button className="buttonBewertung">Weiter zum Test</button></ Link>
                

           </div>

           </div>
        </div>

    );
}

export default Bewertung;
