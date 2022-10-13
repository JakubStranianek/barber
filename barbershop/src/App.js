import './App.css';
import HomeSection from "./components/Home/Home.js"
import About from "./components/About/About.js"
import PriceList from './components/PriceList/PriceList';
import Reviews from './components/Reviews/Reviews';
import Contact from './components/Contact/Contact';
import { Routes, Route, Navigate } from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
      <HomeSection></HomeSection>
      <About></About>
      <PriceList></PriceList>
      <Reviews></Reviews>
      <Contact></Contact>


      <Routes>
          <Route path="/" />
          <Route path="/o-nás" />
          <Route path="/cenník" />
          <Route path="/recenzie" />
          <Route path="/kontakt" />
          <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </div>
  );
}

export default App;
