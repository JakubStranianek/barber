import './App.css';
import HomeSection from "./components/Home/Home.js"
import About from "./components/About/About.js"
import PriceList from './components/PriceList/PriceList';
import Reviews from './components/Reviews/Reviews';
import Contact from './components/Contact/Contact';
import { Routes, Route, Navigate } from 'react-router-dom';
import GalleryImage from './components/Gallery/GalleryImage';


function App() {
  
  return (
    <div className="App">
      <HomeSection></HomeSection>
      <About></About>
      <GalleryImage />
      <PriceList></PriceList>
      <Reviews></Reviews>
      <Contact></Contact>


      <Routes>
          <Route path="/" />
          <Route path="/o-nás" />
          <Route path="/cenník" />
          <Route path="/gallery" />
          <Route path="/recenzie" />
          <Route path="/kontakt" />
          <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </div>
  );
}

export default App;
