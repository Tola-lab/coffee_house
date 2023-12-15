import beans from '../../resources/img/beans_logo_black.svg';
import girl from '../../resources/img/girl.jpg';
import './about-our-beans.scss';

const AboutOurBeans = () => {
    return (
        <div className="about_our_beans">
            <div className="about_our_beans-wrapper">
                <img src={girl} alt="girl with a cup of coffee" />
                <div className="about_our_beans-wrapper_text">
                    <h2 className="about_our_beans-title">About our beans</h2>
                    <img src={beans} alt="beans" />
                    <div className="about_our_beans-descr">
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br/><br/> Afraid at highly months do things on at. Situation recommend objection do intention so questions.<br/> As greatly removed calling pleased improve an.<br/> Last ask him cold feel<br/> met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.
                    </div>
                </div>
            </div>
            <div className="verb"></div>
        </div>
    );
};

export default AboutOurBeans;