import './Logo.css'
import logo from '../../img/logo-einbuergerung.png';

const Logo = () => {
    return (
        <div>
        <img src={logo} alt={"Foto von der Weltkuguel mit verschidene Flagge"} className="logo" />;
        
        </div>
    );
}

export default Logo;