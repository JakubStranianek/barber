import './App.css';
import {Routes, Route, Navigate} from "react-router-dom"
import HomeSection from "./components/Home/Home.js"
import About from "./components/About/About.js"
import PriceList from './components/PriceList/PriceList';

function App() {
  return (
    <div className="App">
      <HomeSection></HomeSection>
      <About></About>
      <PriceList></PriceList>
    </div>
  );
}

export default App;
