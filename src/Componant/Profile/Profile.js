import React from 'react'
import aboutUs from "../../assets/profileImg.webp"
import "./Profile.css"

export default function Profile(props) {
  return <section id='Profile' className="profile">
      <h1>User Profile</h1>
      <div className='profileDiv'>
             <div className='profilesDiv'>
                 <div><img src={aboutUs} alt="No Image"></img></div>
                 {props.userprofile&&<div className='profilesDivB'>
                     <h4>Name : {props.userprofile.name}</h4>
                     <h4>Email : {props.userprofile.email}</h4>
                 </div>}
             </div>
          </div>
  </section>
}
