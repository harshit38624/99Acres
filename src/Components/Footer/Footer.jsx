import React from 'react'
import Logo from "../../assets/images/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="white">
        <div className='wrapper footer'>
            <div className='f-row'>
                    <div className='f-image'>
                       <img src={Logo} width={100} /> 
                       <span>Our vision is to make all people
                        the best place to live for them</span>
                    </div>
             
                <div className='f-information'>
                    <div>
                        Information
                    </div>
                    <div>
                        Chitkara University, Rajpura, Punjab
                    </div>
                    <div>
                        <a href="">Property</a>
                        <a href="">Services</a>
                        <a href="">Product</a>
                        <a href="">About Us</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer