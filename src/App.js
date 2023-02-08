import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './components/Home';
import Footer from './components/Footer';
import CreateBlog from './components/CreateBlog';
function App() {
  return (
  <>
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<CreateBlog/>}/>
    </Routes>
    <Footer/>
  </Router>
  </>
  );
}

export default App;
