import './App.css';
import Contact from './components/contact/Contact';
import MainSection from './components/main-section/MainSection';
import Nav from './components/Navbar/Nav';
import Products from './components/Products/Products';
import UpComing from './components/UpComing/UpComing';
import Home from './components/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import NotFound from './components/Not-Found/NotFound.js';

function App() {
  return (
    <>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/upComing' element={<UpComing/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
    </>
  );
}

export default App;
