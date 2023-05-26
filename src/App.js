import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import About from './pages/about/About'
import NotFound from './pages/notFound/NotFound'
import Plans from './pages/plans/Plans'
import Trainers from './pages/trainer/Trainers';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="">
         
         <Navbar/>
         <Routes>                                                                             
          <Route index element={<Home/>}></Route>
          <Route path='about' element={<About/>}></Route>
          <Route path='contact' element={<Contact/>}></Route>
          <Route path='gallery' element={<Gallery/>}></Route>
          <Route path='plans' element={<Plans/>}></Route>     
          <Route path='trainers' element={<Trainers/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>        
         </Routes>
         <Footer/>

    </div>
  );
}

export default App;
