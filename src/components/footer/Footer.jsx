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
                  <iframe src="https://maps.google.com/maps?q=Heritage%20City,%20Sector%2025,%20Gurugram,%20Haryana%20122022&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height={180} frameBorder={0} style={{border: 0}} /><br /><small><a href="https://www.google.com/maps?ll=28.48287,77.076401&z=13&t=m&hl=en-GB&gl=US&mapclient=embed&q=Heritage+City+Sector+25+Gurugram,+Haryana+122022" style={{color: '#666', textAlign: 'left', fontSize: '12px'}}>View Larger Map</a></small>
                </div>
              </div>
            </div>
            <div className="footer-grid">
              <h3>GET IN TOUCH</h3>
              <p>Main branch sector 67A<br />
              Near m3m Urbana,<br />
              Steam press service available <br />
              At MG road metro station <br />
                Gurugram, Haryana (India)<br />
                aman64739@gmail.com<br />
                Mobile : +91-9717212073</p>
            </div>
            <div className="footer-grid">
              <h3>OUR COMPANY</h3>
              <ul>
                <li><a href="/plans">Rate List </a></li>
              </ul>
            </div>
            
          </div>
          <div className="clear"> </div>
        </div>
      </div>
  )
}

export default Footer