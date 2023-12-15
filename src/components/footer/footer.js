import {NavLink} from 'react-router-dom';
import logo from '../../resources/img/logo_black.svg';
import beans from '../../resources/img/beans_logo_black.svg';
import './footer.scss';

const Footer = () => {
    return(
        <div className="footer">
            <nav className="footer__menu">
                    <ul>
                        <li><NavLink to="/"><img src={logo} alt="beans" />Coffee house</NavLink></li>
                        <li><NavLink to="/coffee">Our coffee</NavLink></li>
                        <li><NavLink to="/pleasure">For your pleasure</NavLink></li>
                    </ul>
            </nav>
            <img src={beans} alt="beans" />
        </div>
    )
}

export default Footer;