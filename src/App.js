import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;




