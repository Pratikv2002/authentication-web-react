import React from 'react'
import "./Navbar.css"
// import { Link as ScrollLink } from 'react-scroll/modules';
import { Link as RouterLink } from "react-router-dom";
export default function Navbar(props) {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-90px";
      }
      prevScrollpos = currentScrollPos;
    }
    function onClickLogOut(){
      props.setloginDone(false)
    }
  return <section id='navbar' className='navbar'>
          <div  className='navbarDiv'>
                    <div className='navbarLogo'>
                        <h1>My Landing Page</h1>
                    </div>
                    <div className='navbar-menu'>
                        <ul className='navbar-menu-ul'>
                            <li><RouterLink to="/Home">HOME</RouterLink></li>
                            <li><RouterLink to="/Features">FEATURES</RouterLink></li>
                            <li><RouterLink to="/AboutUs">ABOUT US</RouterLink></li>
                            <li><RouterLink to="/Profile">PROFILE</RouterLink></li>
                            <li><RouterLink to="/Contact">CONTACT</RouterLink></li>
                            <li><RouterLink onClick={onClickLogOut} to='/SignIn'>LOG OUT</RouterLink></li>
                        </ul>
                    </div>
          </div>
  </section>
}
