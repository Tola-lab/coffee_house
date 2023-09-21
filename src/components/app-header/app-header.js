import logo from '../../resources/img/logo.png';
import beans from '../../resources/img/beans_logo.svg'
import './app-header.scss'

const AppHeader = () => {
    return (
        <header className="header">
            <div className="app__header">
                <nav className="app__menu">
                    <ul>
                        <li><a href="#"><img src={logo} alt="beans" />Coffee house</a></li>
                        <li><a href="#">Our coffee</a></li>
                        <li><a href="#">For your pleasure</a></li>
                    </ul>
                </nav>
            </div>
            <div className="app__info">
                <h1 className="app__title">Everything You Love About Coffee</h1>
                <img src={beans} alt="beans" />
                <div className="app__descr">
                    <p>We makes every day full of energy and taste</p>
                    <p>Want to try our beans?</p>
                </div>
            </div>
            <button className="button__main">More</button>
        </header>
    );
}

export default AppHeader;