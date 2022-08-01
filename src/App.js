import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Contact from './components/Contact/Contact';
import Footer from './components/shared/Footer/Footer';
import Navigation from './components/shared/Navigation/Navigation'
import Home from './components/Home/Home';
import Fotos from './components/Fotos/Fotos';
import BestelOnline from './components/BestelOnline/BestelOnline';

function App() {
  return (
    <div>
        <Navigation></Navigation>
       <Routes>
       <Route path='/'  element={<Home/>}/>
       <Route path='/fotos'  element={<Fotos/>}/>
       <Route path='/contact'  element={<Contact/>}/>
       <Route path='/bestelonline'  element={<BestelOnline/>}/>
     </Routes>
        <Footer></Footer>
    </div>
        
    
  );
}

export default App;
