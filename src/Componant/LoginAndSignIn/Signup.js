import React, { useEffect, useState } from "react";
import email from "../../assets/Email.png"
import password from "../../assets/Password.png"
import User from "../../assets/User.png"
// Validate
import { validate } from "./validate";
// Styles
import  "./Login.css";
import "react-toastify/dist/ReactToastify.css";
// Toast
import { ToastContainer, toast } from "react-toastify";
import { notify } from "./toast";
//
import { Link } from "react-router-dom";
// Axios
import axios from "axios";
import { a } from "./DetailsArray";
export default function Signup() {
  // console.log(a)
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  // handle Submit
  // const [finalData, setfinalData] = useState([])
  // Login Successfull
  const [LoginSuccefull, setLoginSuccefull] = useState(false)
  // Register Successfull
  const [RegisterSuccefull, setRegisterSuccefull] = useState()
  function handleSubmit (event){
    event.preventDefault();
    // console.log(data.name)
    const result = a.find( ({ email }) => email === data.email );
    if(!errors.email&& !errors.password&& !errors.confirmPassword && !errors.name && !errors.IsAccepted){
      if(!result){
          a.push(data)
          setRegisterSuccefull("Register Successful")
        // setfinalData((previous)=>{
        //   setRegisterSuccefull("Register Successful")
        //   return [...previous, data];
        // }
        
        // )  
      }else{
        setRegisterSuccefull("This Email is already registered")
      }
      
     }
     else{
       setRegisterSuccefull("All fill required field *")
     }
    //  console.log(a)
 }
//  console.log(finalData)
console.log(a)
//  handle on change input 
const [data, setData] = useState({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  IsAccepted: false,
});
const handleOnChange = (event) => {
  if (event.target.name === "IsAccepted") {
    setData({ ...data, [event.target.name]: event.target.checked });
  } else {
    setData({ ...data, [event.target.name]: event.target.value });
  }
};
 useEffect(() => {
  setErrors(validate(data, "signUp"));
}, [data, touched]);

const focusHandler = (event) => {
  setTouched({ ...touched, [event.target.name]: true });
};
  return <section>
       <div className="containerLogin">
      <form onSubmit={handleSubmit} className="formLogin"  autoComplete="off">
        <h2>Sign Up</h2>
        <h3 className="registerSuccessful">{RegisterSuccefull}</h3>
        <div>
          <div>
            <input type="text" name="name" placeholder="Name" autoComplete="off" onChange={handleOnChange} onFocus={focusHandler}/>
            <img src={User} alt="" />
          </div>
          {errors.name && touched.name && <span className="error">{errors.name}</span>}
        </div> 
        <div>
          <div >
            <input type="text" name="email" placeholder="E-mail" autoComplete="off" onChange={handleOnChange} onFocus={focusHandler}/>
            <img src={email} alt="" />
          </div>
          {errors.email && touched.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <div >
            <input type="password" name="password" placeholder="Password" autoComplete="off" onChange={handleOnChange} onFocus={focusHandler} />
            <img src={password} alt="" />
          </div>
          {errors.password && touched.password && <span className="error">{errors.password}</span>}
        </div>
        <div>
          <div >
            <input type="password" name="confirmPassword"  placeholder="Confirm Password"  autoComplete="off" onChange={handleOnChange} onFocus={focusHandler}/>
            <img src={password} alt="" />
          </div>
          {errors.confirmPassword && touched.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </div>
        <div>
          <div className="terms">
            <input type="checkbox" name="IsAccepted" id="accept" onChange={handleOnChange}  onFocus={focusHandler}/>
            <label htmlFor="accept">I accept terms of privacy policy</label>
          </div>
          {errors.IsAccepted && touched.IsAccepted && <span className="error">{errors.IsAccepted}</span>}
        </div>
        <div>
          <button type="submit">Create Account</button>
          <span style={{ color: "#a29494", textAlign: "center", display: "inline-block", width: "100%" }}>
            Already have a account? <Link to="/SignIn">Sign In</Link>
          </span>
        </div>
      </form>
    </div>
  </section>
}
