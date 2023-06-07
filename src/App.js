import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './components/Home';
import Footer from './components/Footer';
import CreateBlog from './components/CreateBlog';
import About from './components/About';
import BlogPage from './components/BlogPage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
function App() {
  return (
  <>
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<CreateBlog/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/blog/:blogId' element={<BlogPage/>}/>
      <Route path='/profile/:uid' element={<Profile/>}/>
    </Routes>
    <Footer/>
  </Router>
  </>
  );
}

export default App;
