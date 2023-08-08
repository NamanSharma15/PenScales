import { useContext } from 'react';
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
import UpdateProfile from './components/UpdateProfile';
import Alert from './components/Alert';
import NewsBox from './context/NewsContext';
import Verification from './components/Verification';
function App() {
  const context = useContext(NewsBox);
  const {alert} = context
  return (
  <>
  <Router>
    <Navbar/>
    <Alert alert = {alert}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<CreateBlog/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/blog/:blogId' element={<BlogPage/>}/>
      <Route path='/profile/:uid' element={<Profile/>}/>
      <Route path='/verify' element={<Verification/>}/>
      <Route path='/updateprofile/:uid' element={<UpdateProfile/>}/>
    </Routes>
    <Footer/>
  </Router>
  </>
  );
}

export default App;
