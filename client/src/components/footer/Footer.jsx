import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
      <div className="container-fluid footer-basic bg-primary ">
        <footer>
            <a className='address-link' href="https://www.google.com/maps/place/23%C2%B014'24.3%22N+77%C2%B024'19.2%22E/@23.2400833,77.4027584,17z/data=!3m1!4b1!4m4!3m3!8m2!3d23.2400833!4d77.4053333?entry=ttu">
            <div  className="social"><span className="text-light fw-bolder">Address</span> <br />  F-15,  First Floor, Kashif Complex,  <br />  6 Malviya Nagar,Raj Bhavan Road, Bhopal</div>
            </a>
            <div className="social"> <span className="text-light fw-bolder">Contact No.</span> <br /> +91 93409 26300 </div>
            <ul className="list-inline">
                <li className="list-inline-item"><Link
                    className="nav-link"
                    to="/"
                  >
                    Home
                  </Link></li>
                <li className="list-inline-item"><a
                    className="nav-link"
                    href="/#about"
                  >
                    About Us
                  </a></li>
                <li className="list-inline-item"><a
                    className="nav-link"
                    href="/#services"
                  >
                    Services
                  </a></li>
                <li className="list-inline-item"><Link to="/projects">Projects</Link></li>
                <li className="list-inline-item"><a
                    className="nav-link"
                    href="/#team"
                  >
                    Team
                  </a></li>
            </ul>
           <div className='px-5'>
             <hr className='text-secondary'/>
             <p className="copyright">SSS Technologies © 2024</p>
           </div>
        </footer>
    </div>
    </>
  )
}

export default Footer
