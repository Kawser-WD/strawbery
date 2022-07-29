import './App.css';
import Fruits from './components/Fruits/Fruits';
import About from './components/Home/About/About';
import Factory from './components/Home/Factory/Factory';
import Header from './components/Home/Header/Header';
import Navigation from './components/shared/Navigation/Navigation'

function App() {
  return (
      <div>
         <Navigation></Navigation>
       <Header></Header>
       <About></About>
       <Factory></Factory>
       <Fruits></Fruits>
      </div>
  );
}

export default App;
