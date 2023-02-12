import React from 'react'

const Services = () => {
  return (

    <>
    <div className="image-slider" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '500px',
        width: '100%'
      }}>
        <img src="http://luckydrycleaners.in/images/d1.JPG" alt="" style={{
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
        <div className="wrap">
          <div className="specials-heading">
            <h3>Our Services</h3>
          </div>
          <div className="specials-grids">
            <div className="special-grid">
              <img src="	http://luckydrycleaners.in/images/a1.jpg" title="image-name" />
              <a href="#">CUSTOM DRY CLEANING</a>
              <p>Your distinct garment is first inspected for stains, loose buttons or beads and open seams. All repairs are tended to before the cleaning process. Your delicate garment is then pre-treated for stain removal and is professionally dry cleaned by our skilled technicians..</p>
            </div>
            <div className="special-grid">
              <img src="https://images.pexels.com/photos/6994138/pexels-photo-6994138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" title="image-name" />
              <a href="#">HOME &amp; BUSINESS PICK UP &amp; DELIVERY</a>
              <p>If you are looking for the convenience of a pick-up and delivery service, at a nominal cost we promise to go beyond all your expectations..</p>
            </div>
            <div className="special-grid spe-grid">
              <img src="https://sc02.alicdn.com/kf/HTB1zMkdaQ9E3KVjSZFGq6A19XXaK/237341465/HTB1zMkdaQ9E3KVjSZFGq6A19XXaK.jpg" title="image-name" />
              <a href="#">SPECIALTY SERVICE FOR SUITS AND JACKET</a>
              <p>We care about your expensive suits. Each suit is individually treated by our garment care specialists using the finest and the most gentle products available on the international market. Your suit is then gently pressed on our automatic Form Finishers.</p>
            </div>
            <div className="specials-grids">
              <div className="special-grid">
                <img src="	http://luckydrycleaners.in/images/a3.jpg" title="image-name" />
                <a href="#">CURTAINS CLEANING</a>
                <p>Your distinct garment is first inspected for stains, loose buttons or beads and open seams. All repairs are tended to before the cleaning process. Your delicate garment is then pre-treated for stain removal and is professionally dry cleaned by our skilled technicians..</p>
              </div>
              <div className="special-grid">
                <img src="	http://luckydrycleaners.in/images/a4.jpg" title="image-name" />
                <a href="#">FINEST SHIRT SERVICE</a>
                <p>If you are looking for the convenience of a pick-up and delivery service, at a nominal cost we promise to go beyond all your expectations..</p>
              </div>
              <div className="special-grid spe-grid">
                <img src="	http://luckydrycleaners.in/images/a5.jpg" title="image-name" />
                <a href="#">WEDDING DRESS CLEANING</a>
                <p>We care about your expensive suits. Each suit is individually treated by our garment care specialists using the finest and the most gentle products available on the international market. Your suit is then gently pressed on our automatic Form Finishers.</p>
              </div>
              <div className="clear"> </div>
            </div>
          </div>
        </div>	
      </div>
    </>
  )
}

export default Services