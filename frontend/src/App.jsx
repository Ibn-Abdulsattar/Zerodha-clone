import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './landing_page/home/HomePage';
import SignupPage from './landing_page/signup/SignupPage';
import AboutPage from './landing_page/about/AboutPage';
import ProductsPage from './landing_page/products/ProductsPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import NotFound from './landing_page/NotFound';
import Authenticate from './landing_page/authenticate/Authenticate';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/product' element={<ProductsPage/>}/>
      <Route path='/pricing' element={<PricingPage/>}/>
      <Route path='/support' element={<SupportPage/>}/>
      <Route path='/authenticate' element={<Authenticate/>}/>
      <Route path='/*' element={<NotFound/>}/>
    </Routes>
    </>
  )
};

export default App
