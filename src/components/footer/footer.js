import logo from '../../resources/img/logo_black.svg';
import beans from '../../resources/img/beans_logo_black.svg';
import './footer.scss';

const Footer = () => {
    return(
        <div className="footer">
            <nav className="footer__menu">
                    <ul>
                        <li><a href="#"><img src={logo} alt="beans" />Coffee house</a></li>
                        <li><a href="#">Our coffee</a></li>
                        <li><a href="#">For your pleasure</a></li>
                    </ul>
            </nav>
            <img src={beans} alt="beans" />
        </div>
    )
}

export default Footer;