import './App.css';
import HomeSection from "./components/Home/Home.js"
import About from "./components/About/About.js"
import PriceList from './components/PriceList/PriceList';
import Reviews from './components/Reviews/Reviews';
import Contact from './components/Contact/Contact';

function App() {
  
  return (
    <div className="App">
      <HomeSection></HomeSection>
      <About></About>
      <PriceList></PriceList>
      <Reviews></Reviews>
      <Contact></Contact>
    </div>
  );
}

export default App;
