import React from 'react'
import "./About.css"
import aboutUs from "../../assets/aboutUs.jpg"

export default function About() {
  return <section id='AboutUs' className='about'>
      <div className='aboutDiv'>
               <div className='aboutA'>
                 <img src={aboutUs}></img>
               </div>
               <div className='aboutB'>
                 <h1>ABOUT US</h1>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                 <h3>Why Choose Us?</h3>
                 <div className='aboutList'>
                   <ul>
                     <li>Lorem, ipsum.</li>
                     <li>Lorem, ipsum.</li>
                     <li>Lorem, ipsum.</li>
                     <li>Lorem, ipsum.</li>
                     <li>Lorem, ipsum.</li>
                   </ul>
                   <ul>
                     <li>Lorem, ipsum.</li>
                     <li>Lorem, ipsum.</li>
                     <li>Lorem, ipsum.</li>
                     <li>Lorem, ipsum.</li>
                     <li>Lorem, ipsum.</li>
                   </ul>
                 </div>
               </div>
        </div>
  </section>
}
