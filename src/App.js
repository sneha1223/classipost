import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header/Header';
import Topbar from './Components/Navbar/Topbar';
// import Banner from './Components/Banner/Banner';

import { BrowserRouter ,Routes,Route } from 'react-router-dom';

import HomePage from './Pages/Home1/HomePage';
import HomePage2 from './Pages2/HomePage2';
// import HomePage2 from './Page2/Home2/HomePage2';
// import MainPage from './Pages/MainPage/MainPage';
function App() {
  return (
    <div className="App">
      <Header />
      <Topbar />
      {/* <Search /> */}
      {/* <Banner />
      <Products />
      <Content/>
      <Contact/>
      <Footer/> */}
      {/* <Products_Demo/> */}


      <BrowserRouter>
      <Routes>
        <Route exact path='/home1' element={<HomePage/>}></Route>
        <Route exact path='/home2' element={<HomePage2/>}></Route>
      </Routes>
       </BrowserRouter> 

   </div>
  );
}

export default App;
