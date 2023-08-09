import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Contact from './components/Contact'
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
function App() {

  return (
    <>
<BrowserRouter>
<Navbar />
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/Gallery' element={<Gallery />}></Route>
        </Routes>
        <Footer/>
</BrowserRouter>
    </>
  )
}

export default App
