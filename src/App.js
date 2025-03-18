import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Main from "./components/home/Main";
import Product from "./pages/product/Product";
import Customers from "./pages/customer/Customers";
import CusChat from "./pages/cuschat/CusChat";
import Profile from "./pages/profile/Profile";
import { useEffect, useState } from "react";
import AuthService from "./service/Auth";
import Dashboard from "./components/home/Dashboard";
import CustomerHome from "./pages/customerHome/CustomerHome";
import CustomerMain from "./components/customerHome/CustomerMain";
import { useSelector } from "react-redux";
import ShopOnline from "./pages/shopOnline/ShopOnline"
import News from "./pages/news/News";
import About from "./pages/about/About";
import Detail from "./pages/productDetail.jsx/Detail";
import Whishes from "./pages/wishes/Whishes";
import Cart from "./pages/cart/Cart";
import CustomerProfile from "./pages/customerProfile/CustomerProfile";
import Complaint from "./components/customerProfile/Complaint";
import CusChatCustomer from "./components/customerProfile/CusChat";
import HelpCenter from "./components/customerProfile/HelpCenter";
import CusProfile from "./components/customerProfile/CusProfile";

function App() {

  const [data, setData] = useState()
  const [products, setProducts] = useState()
  const [allProducts, setAllProducts] = useState()

  const getUser = async () => {
    try {
      const res = await AuthService.getUser()
      setData(res)
      res.shops.length !== 0 && localStorage.setItem("shopId", res.shops[0].id)
    } catch (err) {
      console.log(err)
    }
  }

  const getProducts = async() => {
    try{
      const res = await AuthService.getProducts()
      setProducts(res.data)
    }catch(err){
      console.log(err)
    }
  }

  const getAllProducts = async() => {
    try{
      const res = await AuthService.getAllProducts()
      setAllProducts(res.data.results)
    }catch(err){
      console.log(err)
    }
  }

  const {isLoading} = useSelector((state)=>state.shop)

  const { loggedIn } = useSelector((state) => state.auth)

  useEffect(() => {

    getUser()
    getProducts()
    getAllProducts()
  }, [loggedIn, isLoading])

  console.log(data)



  return (
    <div>
      <Routes>
        {data && data.account_type === "shopper"
          ?
          <Route path="/" element={<Home data={data} />}>
            <Route index element={data && data.shops.length === 0 ? <Dashboard /> : <Main products={products}/>} />
            <Route path="/product" element={<Product products={products}/>} />
            <Route path="/customers" element={<Customers data={data} />} />
            <Route path="/cuschat" element={<CusChat data={data} />} />
            <Route path="/profile" element={<Profile data={data} />} />
          </Route>
          :
          <Route path="/" element={<CustomerHome />}>
            <Route index element={<CustomerMain products={allProducts}/>} />
            <Route path="shop" element={<ShopOnline/>}/>
            <Route path="news" element={<News/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="detail" element={<Detail/>}/>
            <Route path="wishes" element={<Whishes/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="profile" element={<CustomerProfile/>}>
              <Route index element={<CusProfile/>}/>
              <Route path="complaint" element={<Complaint/>}/>
              <Route path="chat" element={<CusChatCustomer/>}/>
              <Route path="help" element={<HelpCenter/>}/>
            </Route>
          </Route>
        }
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>

  );
}

export default App;
