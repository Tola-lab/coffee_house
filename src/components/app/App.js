import AppHeader from '../app-header/app-header';
import AboutUs from '../about-us/about-us';
import OurBest from '../our-best/our-best';
import Footer from '../footer/footer';

const App = () => {
    return (
      <div className="app">
        <AppHeader/>
        <main>
          <AboutUs/>
          <div className="best__coffee">
            <OurBest/>
          </div>
          <div className="footer">
            <Footer/>
          </div>
        </main>
    </div>
    )
}

export default App;
