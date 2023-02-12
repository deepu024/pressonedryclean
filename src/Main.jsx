import React from 'react'

const Main = () => {
  return (
    <>
      <div className="image-slider" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '500px',
        width: '100%'
      }}>
        <img src={require('./assets/1.jpeg')} alt="" style={{
          display: 'block',
          margin: 'auto',
          width: '100%',
          height: '100%',
        }} />
      </div>

      <div className="content">
        <div className="content_top">
          <div className="wrap">
            <h1><a href="#">WELCOME TO PRESS ONE DRY CLEANERS.</a></h1>
            <p>Press One Dry Cleaners has always been the leader in launching new services that are very much in customer's benefit. We aim to provide you with the best level of service without the normal excessive charges associated with most other reputable cleaners. We achieve this by using the latest machinery coupled with clever production efficiencies... </p>
            <span><a className="learnmore" href="#">LEARN MORE</a></span>
          </div>
        </div>
        <div className="content-grids" >
          <div className="wrap custom-wrap">
            <div className="grid">
              <a href="#"><img src="http://luckydrycleaners.in/images/11.jpg" title="image-name" /></a>
              <h3>Custom Dry Cleaning </h3>
              <p>Your distinct garment is first inspected for stains, loose buttons or beads and open seams. All repairs are tended to before the cleaning process. Your delicate garment is then pre-treated for stain removal and is professionally dry cleaned by our skilled technicians..</p>
              <a className="button" href="#">More</a>
            </div>
            <div className="grid">
              <a href="#"><img src="http://luckydrycleaners.in/images/13.jpg" title="image-name" /></a>
              <h3>Curtain Cleaning</h3>
              <p>Our specialist steaming and finishing machines allow us to guarantee that your Home Furnishing Garments like curtains, pillows etc. will not shrink during the cleaning process. All items are individually inspected and then washed with the gentlest detergents before being finished to our exacting standards..</p>
              <a className="button" href="#">More</a>
            </div>
            <div className="clear"> </div>
          </div>
        </div>
        <div className="specials">
          <div className="wrap">
            <div className="specials-heading">
              <h3>OUR SERVICES</h3>
            </div>
            <div className="specials-grids">
              <div className="special-grid">
                <img src="	http://luckydrycleaners.in/images/9.jpg" title="image-name" />
                <a href="#">HOME &amp; BUSINESS PICK UP &amp; DELIVERY</a>
                <p>If you are looking for the convenience of a pick-up and delivery service, at a nominal cost we promise to go beyond all your expectations..</p>
              </div>
              <div className="special-grid">
                <img src="	http://luckydrycleaners.in/images/8.jpg" title="image-name" />
                <a href="#">SPECIALTY SERVICE FOR SUITS AND JACKET</a>
                <p>We care about your expensive suits. Each suit is individually treated by our garment care specialists using the finest and the most gentle products available on the international market. Your suit is then gently pressed on our automatic Form Finishers..</p>
              </div>
              <div className="special-grid spe-grid">
                <img src="http://luckydrycleaners.in/images/7.jpg" title="image-name" />
                <a href="#">WEDDING DRESS CLEANING</a>
                <p>A wedding dress is probably the most precious garment and quite possibly the most expensive, and so demands expert cleaning. The cleaning process begins with a thorough inspection of your Wedding Dress. Beads and other trim are tested for serviceability..</p>
              </div>
              <div className="clear"> </div>
            </div>
          </div>
        </div>
        <div className="testmonials">
          <div className="wrap">
            <div className="testmonial-grid">
              <h3>TESTIMONIALS :</h3>
              <p>" good service provide by Press One dry cleaners .great work.</p>
              <a href="#"> - Deepanshu Sharma</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main