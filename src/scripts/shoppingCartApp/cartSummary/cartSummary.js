import React from 'react';

class CartSummary extends React.Component{
  render(){
    return (
		<section id="tf-shopping-cart-summary" className="block">
		<h3 className="tf-shopping-header">
			<span id="tf-shopping-title">Order Summary</span>
		</h3>
		<div className="tf-order-summary-block clearfix">
			
			<div className="row" >
				<span className="one-half  tf-left">Bag Total</span>
				<span className="one-half  tf-right"> <i className="fa fa-inr">&nbsp;</i>{this.props.totalPrice}</span>
			</div>
			<div className="row" >
				<span className="one-half  tf-left">Discount</span>
				<span className="one-half  tf-right"> <i className="fa fa-inr">&nbsp;</i>0</span>
			</div>
			<div className="row" >
				<span className="one-half  tf-left">Sub Total</span>
				<span className="one-half  tf-right"> <i className="fa fa-inr">&nbsp;</i>0</span>
			</div>
			<div className="row" >
				<span className="one-half  tf-left">Handling Charges</span>
				<span className="one-half  tf-right"> <i className="fa fa-inr">&nbsp;</i>0</span>
			</div>
			<div className="row" id="tf-order-total">
				<span className="one-half  tf-left">Order Total</span>
				<span className="one-half  tf-right"> <i className="fa fa-inr">&nbsp;</i>{this.props.totalPrice}</span>
			</div>
			<div className="row" >
				<button className="tf-primary-button">PLACE ORDER</button>
			</div>
		</div>
	</section>
      )
  }
}

export default CartSummary;