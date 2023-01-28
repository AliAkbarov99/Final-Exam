import React from 'react'
import './Navbar.scss'
import logo from '../../Images/logo.png'
import {Link} from 'react-router-dom'
import headphones from '../../Images/headphones.svg'
import { useState } from 'react'

const Navbar = () => {
    const [toggle,setToggle] = useState(false)
    window.onscroll = function(e){
        let scroll = window.pageYOffset;
        if(200<scroll){
            setToggle(true)
        }
        else{
            setToggle(false)
        }
    }



  return (
    <div id='navbar'>
        <div className='navbar__top' style={toggle ? {visibility:"hidden"} : {visibility:"visible"}}>
            <div className='navbar__top__left'>
                <h3>Now Hiring: </h3> <span> Are you a driven and motivated 1st Line IT Support Engineer?</span>
            </div>
            <div className='navbar__top__right'>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin-in"></i>
            <i class="fa-brands fa-youtube"></i>
            </div>
        </div>
        <div className='navbar__bottom'>
            <div className="navbar__bottom__left">
                <div className="navbar__bottom__left__logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="navbar__bottom__left__links">
                    <Link to="/">Home</Link>
                    <Link to="/add">Add</Link>
                </div>
            </div>

            <div className='navbar__bottom__right'>
                <div className='navbar__bottom__right__button'>
                    <button>Free Quote</button>
                </div>
                <div className='navbar__bottom__right__contact'>
                    <div><img src={headphones} alt="" /></div>
                    <div>
                        <span>Have any Question?</span>
                        <p>Call: 10 (78) 837 3647</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar