import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import { TbMenuDeep } from "react-icons/tb";

function Navbar() {
  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[])
  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = () => {
    // mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
    setMobileMenu(!mobileMenu)
  }
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <h1 className='logo-txt'>Edurea</h1>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonial' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}><button className='btn'>Contact Us</button></Link></li>
      </ul>
      <TbMenuDeep className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
