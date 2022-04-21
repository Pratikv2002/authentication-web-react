import React from 'react'
import "./Contact.css"
export default function Contact() {
  return <section id='Contact' className='contact'>
              <div className='contactDiv'>
                     <div>
                         <h1>Contact Us</h1>
                     </div>
                     <form className='form'>
                         <div className='name'>
                             <input type="text" placeholder='First Name' /> 
                             <input type="text" placeholder='Last Name' />
                         </div>
                         <input type="email" placeholder='Email' />
                         <input type="Number" placeholder='Mobile Number' />
                         <textarea placeholder='Write message' name="" id="" cols="30" rows="10"></textarea>
                         <button>Submit</button>
                     </form>
              </div>
  </section>
}
