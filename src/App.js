import './App.css';
import {Routes,BrowserRouter,Route} from "react-router-dom";
import Signup from './Pages/SignUp/Signup';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      {/* <Route path='*' element={<NotFound/>}/> */}
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/dashboard' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
