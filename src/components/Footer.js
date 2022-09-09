import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Footer.scss'
function Footer() {
  AOS.init({ duration: 1100,
    offset: 0,  
    once: true});
  return (
    <div className='footer_main'>
        <div className='col' id='col-1' data-aos='fade-right'>
            <h5 className='mail'>mgudinocontacto@gmail.com</h5>
        </div>
        <div className='col' id='col-2' data-aos='fade-right'>
            Manuel Gudiño
        </div>
    </div>
  )
}

export default Footer