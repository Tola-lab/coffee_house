import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/main-page';
import OurCoffeePage from '../pages/our-coffee-page';
import ForYourPleasurePage from '../pages/for-your-pleasure-page';
import Page404 from '../pages/404';
import AboutItPage from '../pages/about-it-page';


const App = () => {
    return (
    	<Router>
			<div className="app">
				<main>
					<Routes>
						<Route end path="/" element={<MainPage/>}/>
						<Route end path="/coffee" element={<OurCoffeePage/>}/>
						<Route end path="/pleasure" element={<ForYourPleasurePage/>}/>
						<Route end path="/coffee/:id" element={<AboutItPage/>}/>
						<Route end path="*" element={<Page404/>}/>
					</Routes>
				</main>
			</div>
		</Router>
    )
}

export default App;
