import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './components/Home';
import Footer from './components/Footer';
import CreateBlog from './components/CreateBlog';
import About from './components/About';
function App() {
  return (
  <>
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<CreateBlog/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    <Footer/>
  </Router>
  </>
  );
}

export default App;
