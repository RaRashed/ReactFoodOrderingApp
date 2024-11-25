import React, { useState } from 'react';
import Nabvar from './components/Navbar/Nabvar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';

const App = () => {
  const [ShowLogin,setShowLogin] = useState(false);
  return (
    <>
    {ShowLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Nabvar setShowLogin={setShowLogin}/>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>

      </div>
      <Footer />
    </>
  );
};

export default App;