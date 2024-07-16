import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
     <h1>React Context</h1>
     <BrowserRouter>
     <Navbar />    
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/products' element={<Products />}/>
        </Routes>
     </BrowserRouter>
     </div>
  );
}

export default App;
