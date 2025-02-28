import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Main from "./components/home/Main";
import Product from "./pages/product/Product";
import Customers from "./pages/customer/Customers";
import CusChat from "./pages/cuschat/CusChat";
import Profile from "./pages/profile/Profile";
import { useEffect, useState } from "react";
import AuthService from "./service/Auth";


function App() {

  const [data, setData] = useState()

  const getUser = async() => {
    try{
      const res = await AuthService.getUser()
      setData(res)
    }catch(err){
      console.log(err)
    }
  }

  const loggedIn = localStorage.getItem("loggedIn")

  useEffect(()=>{
    
    getUser()
  },[loggedIn])

  console.log(data)


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home data={data}/>}>
          <Route index element={<Main/>}/>
          <Route path="/product" element={<Product data={data}/>}/>
          <Route path="/customers" element={<Customers data={data}/>}/>
          <Route path="/cuschat" element={<CusChat data={data}/>}/>
          <Route path="/profile" element={<Profile data={data}/>}/>
        </Route>
        <Route path="about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>

  );
}

export default App;
