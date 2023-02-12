import React from 'react';

const NavBar = () => {
  return (
    <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="col-md-6">
              </div>
              <div className="col-md-6" style={{float: 'right', color: '#fff', margin: '20px 40px 33px 0px'}}>
                <strong><i className="fa fa-phone" /></strong>+91-9717212073 |<strong><i className="fa fa-mobile" /></strong> +91-8178902212 <strong><a href="https://www.facebook.com/pages/category/Dry-Cleaner/Lucky-Dry-Cleaners-1586681801554945/"><i className="fa fa-facebook-square" aria-hidden="true" style={{color: '#fff', fontSize: '20px'}} /></a></strong>
              </div>
            </div>
          </div>
        </div>
        <div className="wrap">
          <div className="row">
            <div className="col-md-4">
              <div className="logo">
                <a href="index.php" style={{
                  color:'white',
                  fontFamily: 'inherit',
                  fontSize: '30px'
                }}>
                  Press-One
                  {/* <img src="images/logo.png" title="logo" /> */}
                </a>
              </div> 
            </div>
            <div className="col-md-8">
              <div className="top-nav">
                <ul>
                  <li className="active"><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li className="dropdown">
                    <a href="/services" className="dropbtn">Services</a>
                  </li>
                  <li><a href="/plans">Rate List</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="clear"> </div>
        </div>
      </div>
  )
}

export default NavBar