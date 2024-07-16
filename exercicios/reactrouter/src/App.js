import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Navbar } from './Components/Navbar';
import { Products } from './pages/Products';
import { Info } from './pages/Info';
import { Notfound } from './pages/Notfound';
import { SearchForm } from './Components/SearchForm';
import Search from './pages/Search';


function App() {
  return (
    <div className="App">
     <h1>React Router</h1>
     <BrowserRouter>
     <Navbar />
     <SearchForm />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
                    {/**Dinamic router */}
          <Route path='/products/:id' element={<Products />}/>
          {/**Nested router */}
          <Route path='/products/:id/info'  element={<Info />}/>
          <Route path='/search'  element={<Search />}/>
          {/**Not found page 404 */}
          <Route path='*'  element={<Notfound />}/>
           {/**Redirect  */}
          <Route path='/company'  element={<Navigate to="/About" />}/>

       

        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
