import './Logo.css'
import logo from '../../img/logo-einbuergerung.png';

const Logo = () => {
    return (
        <div>
        <img src={logo} className="logo" />;
        
        </div>
    );
}

export default Logo;