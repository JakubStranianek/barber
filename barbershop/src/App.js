import './App.css';
import {Routes, Route, Navigate} from "react-router-dom"
import HomeSection from "./components/Home/Home.js"
import About from "./components/About/About.js"
import PriceList from './components/PriceList/PriceList';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <HomeSection></HomeSection>
      <About></About>
      <PriceList></PriceList>
      <Reviews></Reviews>
    </div>
  );
}

export default App;
