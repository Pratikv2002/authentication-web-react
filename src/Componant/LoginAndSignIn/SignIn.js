import React,{useState} from 'react'
import "./Login.css"
import email from "../../assets/Email.png"
import password from "../../assets/Password.png"
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { a } from './DetailsArray';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
export default function Login(props) {
  let navigate = useNavigate();
  const [loginDetail, setLoginDetail] = useState({
    email:"",
    password:""
  })
  const [loginError, setloginError] = useState(null)
  function handleSubmit (event){
    event.preventDefault();
    // props.login1()
    
    const result = a.find( ({ email }) => email === loginDetail.email );
      if(result){
           if(result.password === loginDetail.password){
            setloginError("Login Successfull")
            props.login1(true,result);
           }
           else{
            setloginError("Incorrect Password")
             props.login1(false,null)
           }
      }
      else{
          setloginError("Email Not Found")
          props.login1(false,null)
      }
  }
  function handleOnChange (event){
      const {name,value} = event.target;
      setLoginDetail((privious)=>{
        return{...privious, [name]:value}
      })
  }
  // console.log(loginDetail)
  return <section className='containerLogin'>
      <div>
      <form className='formLogin' onSubmit={handleSubmit}  autoComplete="off">
        <h2>Sign In</h2>
        <div>
          <div>
            <input type="text" name="email" placeholder="E-mail" autoComplete="off" onChange={handleOnChange} />
            <img src={email} alt="" />
          </div>
        </div>
        <div>
          <div>
            <input type="password" name="password" placeholder="Password" onChange={handleOnChange} autoComplete="off" />
            <img src={password} alt="" />
          </div>
        </div>

        <div>
         { loginError&&<span className="error">{loginError}</span>}
          <button type="submit">Login</button>
          <span style={{ color: "#a29494", textAlign: "center", display: "inline-block", width: "100%" }}>
            Don't have a account?<Link to='/Signup' >Create account</Link>
          </span>
        </div>
      </form>
      {/* <ToastContainer /> */}
      </div>
  </section>
}
