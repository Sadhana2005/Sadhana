//import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
//import MyClassComponent from './components/classComponent';
import Home from './components/css/home';
import About from './components/css/about';
import NavBar from './components/NavBar.jsx';
function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
