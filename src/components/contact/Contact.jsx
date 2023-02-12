import React from 'react'

const Contact = () => {
  return (
    <div className="content">
        <div className="wrap">
          {/*-start-contact--*/}
          <div className="section group">				
            <div className="col span_1_of_3">
              <div className="contact_info">
                <h3>Find Us Here</h3>
                <div className="map">
                  <iframe src="https://maps.google.com/maps?q=Heritage%20City,%20Sector%2025,%20Gurugram,%20Haryana%20122022&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height={180} frameBorder={0} style={{border: 0}} /><br /><small><a href="https://www.google.co.in/maps/place/Lucky+Dry+Cleaners/@28.46264,77.087136,17z/data=!3m1!4b1!4m2!3m1!1s0x390d18db3a4b81d5:0xf3c8296f669850e0" style={{color: '#666', textAlign: 'left', fontSize: '12px'}}>View Larger Map</a></small>
                </div>
              </div>
              <div className="company_address">
                <h3>Shop Information :</h3>
                <p>Main branch sector 67A</p>
                <p>Near m3m Urbana,</p>
                <p>Dlf Phase I Gurgaon -122001,</p>
                <p>Haryana 122001 (India) </p>
                <p>Phone:<span>+91- 9717212073 | +91- 8178902212</span></p>
                <p>Email:<span>aman64739@gmail.com</span></p>
                <p>Website: <span>http://www.luckydrycleaners.in</span></p>
                <p>Follow on: <a href="https://www.facebook.com/pages/category/Dry-Cleaner/Lucky-Dry-Cleaners-1586681801554945/">Facebook</a></p>
              </div>
            </div>				
            <div className="col span_2_of_3">
              <div className="contact-form">
                <h3>Contact Us</h3>
                <form method="post" action="https://formsubmit.co/19f3011369d8c4124eea15e50208b16a">
                  <div>
                    <span><label>NAME</label></span>
                    <span><input name="userName" type="text" className="textbox" required/></span>
                  </div>
                  <div>
                    <span><label>E-MAIL</label></span>
                    <span><input name="userEmail" type="text" className="textbox" required/></span>
                  </div>
                  <div>
                    <span><label>MOBILE</label></span>
                    <span><input name="userPhone" type="text" className="textbox" required/></span>
                  </div>
                  <div>
                    <span><label>SUBJECT</label></span>
                    <span><textarea name="userMsg" defaultValue={" "} required/></span>
                  </div>
                  <div>
                    <span><input type="submit" className="mybutton" defaultValue="Submit" /></span>
                  </div>
                </form>
              </div>
            </div>				
          </div>
        </div>
        {/*-End-contact--*/}
        <div className="clear"> </div>
      </div>
  )
}

export default Contact