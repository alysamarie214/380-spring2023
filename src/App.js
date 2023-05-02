import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Bio from './Bio';
import Home from './Home'
import MyForm from './MyForm';
import MyCarousel from './MyCarousel';
import PageUpload from './PageUpload';

function App() {
  return (
    <div className="App">
      <div id="nav">
        <Link className = "nav-link" id = "home-link" to="/">HOME </Link>
        <Link className = "nav-link" id = "carousel-link" to="/carousel">CAROUSEL </Link>
        <Link className = "nav-link" id = "login-link" to="/login">LOGIN </Link>
      </div>
      <Routes>
        <Route path= "/" element={<Home/>}></Route>
        <Route path= "carousel" element={<MyCarousel/>}></Route>
        <Route path= "login" element={<MyForm/>}></Route>
        <Route path= "pageupload" element={<PageUpload/>}></Route>
      </Routes>
    </div>
  );
}

export default App;