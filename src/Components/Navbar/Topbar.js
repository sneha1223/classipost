import React, { useState } from 'react'
import './Navbar.css'
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Topbar() {
  // [hover, sethover] = useState(false)
  // [pagesHover, setPagesHover] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);

  };
  const handleMouseLeave = () => {
    setShowDropdown(false);
  };


  return (
    <div className='navbar'>
      <div className='flexbox-container-nav'>
        <img className='image' src='https://radiustheme.com/demo/html/classipost/classipost/img/logo.png' alt='' />
      </div>
      <div className='flexbox-container-one'>
        {/* <Navbar expand="lg">
          <Container fluid> */}
            <NavDropdown className='nav-main' show={showDropdown}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              title="Home" id="navbarScrollingDropdown">
                {/* <Link to='/home1'>Home1</Link> */}
              <NavDropdown.Item href='/home1'>Home 1</NavDropdown.Item>
              <NavDropdown.Divider />
              {/* <Link to='/home'> */}
              <NavDropdown.Item href="/home2">
                Home2  
              </NavDropdown.Item>
              {/* </Link> */}
              <NavDropdown.Divider />
              <NavDropdown.Item href="/home3">
                Home3
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Link to='/who' className='nav-link' >Who we are</Link> */}
          <Nav.Link className='nav-link' href='how' >How it Works?</Nav.Link>
          <Nav.Link className='nav-link' >Pages</Nav.Link>
          <Nav.Link className='nav-link' >Features</Nav.Link>
          <Nav.Link className='nav-link' >Contact</Nav.Link>
          {/* </Container>
        
        </Navbar> */}
{/* <div>
<button className='btn-post-ad'>Post your ad</button>
 </div>
 */}












        {/* <nav className='nav-main'>
          <a href='home' className='nav-links'>Home</a>
          <div className='hover-page' >
            <a href='home1'>Home 1</a>
            <a href='home2'>Home 2</a>
          </div>
          <a href='who-we' className='nav-links'>Who we are</a>
          <a href='how-it' className='nav-links'>How it works</a>
          <a href='pages' className='nav-links'>Pages</a>
          <a href='features' className='nav-links'>Features</a>
          <a href='contact' className='nav-links'>Contact</a>
         
        </nav> */}
      </div>

    </div>
  )
}

export default Topbar


{/* <a className='home' href='home'>Home</a>
                <a href='who'>Who we are?</a>
                <a href='how'>How it Works?</a>
                <a href='pages'>Pages</a>
                <a href='feature'>Feature</a>
                <a href='contact'>Contact</a> */}