import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Contact from './components/Contact'
import Navbar from './components/Navbar';
import Order from './components/Order';
import Full from './sub_components/Full';
import Homepage from './components/Homepage';
import PrivacyPolicy from './components/PrivacyPolicy';
import Footer from './components/Footer';
import Terms from './components/Terms';
import Gallery from './components/Gallery';
import Oversize from './sub_components/Oversized';
import Trend from './sub_components/Trend';
import Backprint from './sub_components/Backprint';
import Preview from './sub_components/Preview';
function App() {

  return (
    <>
<BrowserRouter>

<Navbar />
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/Contact' element={<Contact />}/>
          <Route path='/Gallery' element={<Gallery />}/>
          <Route path='/Order' element={<Order />}/>
          <Route path='/Terms' element={<Terms />}/>
          <Route path='/Oversize' element={<Oversize />}/>
          <Route path='/PrivacyPolicy' element={<PrivacyPolicy />}/>
          <Route path='/Trend' element={<Trend />}/>
          <Route path='/fullsleeve' element={<Full />}/>
          <Route path='/Backprint' element={<Backprint />}/>
          <Route path='/Preview' element={<Preview />}/>
          
        </Routes>
        <Footer/>
</BrowserRouter>
    </>
  )
}

export default App
