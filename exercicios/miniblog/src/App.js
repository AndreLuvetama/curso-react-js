import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { AuthProvider } from "./context/AuthContext"; 
//Verifica se a autenticação do usuário foi feito com sucesso
import { onAuthStateChanged } from "firebase/auth";
import { useAuthentication } from "./hooks/useAthentication";
import { useEffect, useState } from "react";
import { CreatePost } from "./pages/CreatePost/CreatePost";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Search } from "./pages/Search/Search";
import { Post } from "./pages/Post/Post";

function App() {
  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()
  const loadingUser = user === undefined;

    useEffect(()=> {
      onAuthStateChanged(auth, (user) =>{
        setUser(user);
      })
    }, [auth])

  if(loadingUser){
    return<p>Carregando usuário...</p>
  }
  return (
      //disponibiliza o usuário para todos locais
      <AuthProvider value={{user}}> 
        <BrowserRouter>
        <Navbar/>
          <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/search" element={<Search />} />
                <Route path="/posts/:id" element={<Post />} />

                <Route path="/login" element={!user ? <Login /> : <Navigate to='/' /> } />
                <Route path="/register" element={!user ? <Register /> : <Navigate to='/' />}e />
                <Route path="/posts/create" element={user ? <CreatePost /> : <Navigate to='/login' />} />
                <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to='/login' />}  />


              </Routes> 
          </div>
          <Footer />
        </BrowserRouter>   
      </AuthProvider>
  );
}

export default App;