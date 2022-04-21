import "./App.css";
import SingIn from "./Componant/LoginAndSignIn/SignIn";
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import About from "./Componant/About/About";
import Contact from "./Componant/Contact/Contact";
import Features from "./Componant/Features/Features";
import Home from "./Componant/Home/Home";
import Navbar from "./Componant/Navbar/Navbar";
import Profile from "./Componant/Profile/Profile";
import Signup from "./Componant/LoginAndSignIn/Signup";
import { useState } from "react";
import { flushSync } from "react-dom";
function App() {
  const [loginDone, setloginDone] = useState(false)
  const [userprofile, setuserprofile] = useState(null)
   function fun1(a,b){
     setloginDone(a)
     setuserprofile(b)
   }
  //  user profile
  //
  return (
    <BrowserRouter>
    { loginDone &&<Navbar setloginDone = {setloginDone}/>}
      <Routes>
        <Route path="/" element={loginDone===false?<SingIn login1 = {fun1}/>:<Home/>} />
        <Route path="Home" element={<Home/>} />
        <Route path="Features" element={<Features/>} />
        <Route path="AboutUs" element={<About/>} />
        <Route path="Profile" element={<Profile userprofile={userprofile}/>} />
        <Route path="Contact" element={<Contact/>} />
        <Route path="SignIn" element={loginDone===false?<SingIn login1 = {fun1}/>:<Home/>} />
        <Route path="Signup" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


