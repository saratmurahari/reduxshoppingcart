import React from 'react'

const Footer = () => (
  <footer id="tf-footer">
  	<section className="tf-footer-wrapper">
	  	
	  		<div className="tf-links tf-shopping-links block">
	  			<h4>Online Shopping</h4>
		  		<ul className="tf-shopping-categories">
		  			<li><a href="#">Men</a></li>
		  			<li><a href="#">Women</a></li>
		  			<li><a href="#">Kids</a></li>
		  			<li><a href="#">Home & Living</a></li>
		  			<li><a href="#">Gift Cards</a></li>
				</ul>
			</div>
			<div className="tf-links tf-user-links block">
				<h4>USEFUL LINKS</h4>
				<ul className="tf-useful-links">
					<li><a href="#">Contact Us</a></li>
		  			<li><a href="#">FAQ</a></li>
		  			<li><a href="#">Terms Of Use</a></li>
		  			<li><a href="#">Track Orders</a></li>
		  			<li><a href="#">Shipping</a></li>
		  			<li><a href="#">Cancellation</a></li>
		  			<li><a href="#">Returns</a></li>
				</ul>
			</div>
	  	
	  	
	  		<div className="tf-contact-block block">
	  			<h4>Experience brand store app on mobile</h4>
	  			<div className="tf-app-icon">
	  				<a href="#"><img className="tf-android" src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"/></a>
	  			</div>
	  			<div className="tf-app-icon">
	  				<a href="#"><img className="tf-apple" src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"/></a>
	  			</div>
			</div>
			<div className="tf-keepintouch-block block">
				<h4>Keep in touch</h4>
				<ul className="tf-useful-links">
					<li><a href="#"><i className="fa fa-facebook-square" aria-hidden="true"></i></a></li>
		  			<li><a href="#"><i className="fa fa-twitter-square" aria-hidden="true"></i></a></li>
		  			<li><a href="#"><i className="fa fa-youtube-square" aria-hidden="true"></i></a></li>
		  			<li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
				</ul>
			</div>
			<div className="tf-address-block block">
				<h4>Registered Office Address</h4>
				<ul className="tf-useful-links">
					<li>Brand Store</li>
					<li>Near Sony Signal</li>
					<li>Kormangala 1st Block</li>
					<li>Bangalore -560102 </li>
				</ul>
			</div>
	  	
	 </section> 	
  </footer>
)

export default Footer;