import React from 'react'
import "./Features.css"
import {FaAddressCard,FaAnchor,FaAddressBook,FaAirFreshener} from "react-icons/fa";

export default function Features() {
  return <section id='Features' className='Features'>
                    <h1>FEATURES</h1>
             <div className='featuresDiv'>
                <div className='card'>
                    <i><FaAddressCard className='featureIcon'/></i>
                    <h3>Lorem, ipsum </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad laudantium accusamus fugiat ex nisi repudiandae?</p>
                </div>
                <div className='card'>
                    <i><FaAnchor className='featureIcon'/></i>
                    <h3>Lorem, ipsum</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, perferendis itaque rerum eius eos repudiandae.</p>
                </div>
                <div className='card'>
                    <i><FaAddressBook className='featureIcon'/></i>
                    <h3>Lorem, ipsum</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quae adipisci architecto quo? Facere, voluptas?</p>
                </div>
                <div className='card'> 
                    <i><FaAirFreshener className='featureIcon'/></i>
                    <h3>Lorem, ipsum</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta expedita laudantium, nesciunt a neque nihil.</p>
                </div>
             </div>
  </section>
}
