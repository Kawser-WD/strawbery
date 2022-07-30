import './App.css';
import Contact from './components/Contact/Contact';
import Fruits from './components/Fruits/Fruits';
import About from './components/Home/About/About';
import Factory from './components/Home/Factory/Factory';
import Header from './components/Home/Header/Header';
import Media from './components/Media/Media';
import Footer from './components/shared/Footer/Footer';
import Navigation from './components/shared/Navigation/Navigation'

function App() {
  return (
      <div>
         <Navigation></Navigation>
       <Header></Header>
       <About></About>
       <Factory></Factory>
       <Fruits></Fruits>
       <Media></Media>
       <Contact></Contact>
       <Footer></Footer>
      </div>
  );
}

export default App;
