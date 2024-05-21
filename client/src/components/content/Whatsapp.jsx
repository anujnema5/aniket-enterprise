import React from 'react'

import "../../Whatsapp.css"
import Whatsapp from "../assets/WhatsApp-1.png";



function Contact() {
  return (
<a target='_blank' href="https://wa.me/+919340926300"><div> <img src={Whatsapp} className='whatsapp-img' alt="" /> </div></a>
  )
}

export default Contact;
