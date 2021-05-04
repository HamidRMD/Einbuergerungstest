import React, { useState } from 'react';
import './StartSeite.css'

const AboutUs = () => {
  const [show, setShow] = useState(false)

  return (
    <div className="AboutUs-body">

      <button className="aboutUs-button" onClick={() => setShow(!show)} >Über uns</button>

      {show ? <div className="divAboutUs"><p className="startSeite-ueberUns">Wir sind WorldCode, eine Gruppe von Webentwicklern mit Sitz in Berlin und Düsseldorf. Unser Vorschlag ist, dass Sie sich komplett online auf den Einbürgerungstest vorbereiten.<br /> <br />Wir wüschen Ihnen viel Erfolg und viel Spaß!</p></div> : null}


    </div>
  );
}

export default AboutUs;
