import { createRoot } from 'react-dom/client'
import {BrowserRouter} from  'react-router-dom'
import App from './App.jsx'
import Navbar from './landing_page/Navbar.jsx'
import Footer from './landing_page/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
    <App />
    <Footer/>
  </BrowserRouter>,
)
