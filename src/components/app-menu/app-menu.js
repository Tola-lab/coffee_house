import {NavLink} from 'react-router-dom';
import logo from '../../resources/img/logo.png';
import './app-menu.scss';

const AppMenu = () => {
    return (
        <div>
            <nav className="app__menu">
                <ul>
                    <li><NavLink to="/"><img src={logo} alt="beans" />Coffee house</NavLink></li>
                    <li><NavLink to="/coffee">Our coffee</NavLink></li>
                    <li><NavLink to="/pleasure">For your pleasure</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default AppMenu;