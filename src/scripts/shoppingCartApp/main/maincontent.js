import React from 'react'
//import { Switch, Route } from 'react-router-dom'
import ShoppingBag from './../shoppingBag/shoppingBag.js'
import CartSummary from './../cartSummary/cartSummary.js'
//import Actors from './../actor/actor.js'


const Main = (props) => (
  <main id="tf-main-content">
  	<section id="tf-shopping-cart-details" className="block">
		<h3 className="tf-shopping-header row">
			<span id="tf-shopping-title">Your Shopping Bag</span>
			<span className="tf-cart-count" >[ {props.items} items ]</span>
		</h3>
		<ShoppingBag {...props}/>
  	</section>
  	<CartSummary {...props}/>
  </main>
)

export default Main