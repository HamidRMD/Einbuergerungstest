import './Logo.css'
import logo from '../../img/logo-einbuergerung.png';
import {Link} from "react-router-dom";


const Logo = () => {
    return (
        <div>
        <Link to={"/Start"}><img src={logo} alt={"Foto von der Weltkuguel mit verschidene Flagge"} className="logo"/> </Link>
        
        </div>
    );
}

export default Logo;