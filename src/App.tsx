
import {Routes, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
// import { AuthContextProvider } from './contexts/AuthContext';


import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from './pages/Register';


function App() {
  return (
    <BrowserRouter>
    {/* <AuthContextProvider> */}
    <Routes>
    <Route path="/" element={<Home />} /> 
    <Route path="/login" element={<Login />}  />
    <Route path="/register" element={<Register />}  />
    {/* <Route path="/rooms/:id" element={<Room />}  /> */}
    {/* <Route path="/admin/rooms/:id" element={<AdminRoom />} /> */}
    </Routes>
    {/* </AuthContextProvider> */}
    </BrowserRouter>
  );
}

export default App;
