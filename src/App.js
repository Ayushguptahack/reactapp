import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './Components/Layout';
import Contact from './Components/Contact';
import Home from './Components/Home';
import NoPage from './Components/NoPage';
import Signin from './Components/Signin';
import AboutUs from './Components/AboutUs';
import Gallery from './Components/Gallery';

class App extends React.Component{

  render(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="contact" element={<Contact />}/>
            <Route path="login" element={<Signin />}/>
            <Route path="aboutus" element={<AboutUs />}/>
            <Route path='gallery' element={<Gallery />}/>
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
