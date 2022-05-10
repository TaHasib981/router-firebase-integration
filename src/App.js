import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Order from './Component/Order/Order';
import Product from './Component/Product/Product';
import Register from './Component/Register/Register';
import RequireAuth from './Component/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/login" element={<Login></Login>} ></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/product" element={
          <RequireAuth>
            <Product></Product>
          </RequireAuth>
        }></Route>
        <Route path="/order" element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
