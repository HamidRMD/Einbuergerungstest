import React from 'react';
import { Link } from 'react-router-dom';



const Start =()=>{

      return <div >
    
<h1 >Start Seite</h1>
<Link to={"/Zurück"}><button>Test Vorbereitung</button></Link>

<Link to={"/Login"}><button>Start den Test</button></Link>



<Link to={"/Bewertung"}><button>Start den Test</button></Link>
      </div>
}

export default Start;