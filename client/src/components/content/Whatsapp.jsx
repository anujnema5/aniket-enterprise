import React from 'react'
// import "../../whatsapp.css";
import "../../Whatsapp.css"
// import ContactImg from "../assets/what-we-do.png";
import Whatsapp from "../assets/Whatsapp.png";



function Contact() {
  return (
<a target='_blank' href="https://wa.me/+919340926300"><div> <img src={Whatsapp} className='whatsapp-img' alt="" /> </div></a>
  )
}

export default Contact;
