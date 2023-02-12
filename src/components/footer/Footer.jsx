import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="wrap">
          <div className="footer-grids">
            <div className="footer-grid">
              <div className="contact_info">
                <h3>Find Us Here</h3>
                <div className="map">
                  <iframe src="https://maps.google.com/maps?q=Heritage%20City,%20Sector%2025,%20Gurugram,%20Haryana%20122022&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height={180} frameBorder={0} style={{border: 0}} /><br /><small><a href="https://www.google.co.in/maps/place/Lucky+Dry+Cleaners/@28.46264,77.087136,17z/data=!3m1!4b1!4m2!3m1!1s0x390d18db3a4b81d5:0xf3c8296f669850e0" style={{color: '#666', textAlign: 'left', fontSize: '12px'}}>View Larger Map</a></small>
                </div>
              </div>
            </div>
            <div className="footer-grid">
              <h3>GET IN TOUCH</h3>
              <p>Main branch sector 67A<br />
              near m3m Urbana,<br />
                Gurugram, Haryana (India)<br />
                aman64739@gmail.com<br />
                Mobile : +91-9717212073</p>
            </div>
            <div className="footer-grid">
              <h3>OUR COMPANY</h3>
              <ul>
                <li><a href="#">Our Branches</a></li>
                <li><a href="#">Rate List </a></li>
              </ul>
            </div>
            <div className="footer-grid footer-lastgrid">
              <h3>FOLLOW US</h3>
              <ul>
                <li><a href="https://www.facebook.com/pages/category/Dry-Cleaner/Lucky-Dry-Cleaners-1586681801554945/">facebook</a></li>
                <li><a href="https://www.linkedin.com/pub/lucky-dry-cleaners/b3/2b1/b94">Linkedin</a></li>
                <li><a href="https://plus.google.com/u/0/110143060464924017324/posts?hl=en">Google +</a></li>
              </ul>
            </div>
          </div>
          <div className="clear"> </div>
        </div>
      </div>
  )
}

export default Footer