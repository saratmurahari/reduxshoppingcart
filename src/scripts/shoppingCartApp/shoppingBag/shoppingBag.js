import React from 'react';
import axios from 'axios';
import ShoppingList from './ShoppingList.js';
import servicePaths from './../../config/servicepaths.js';

class ShoppingBag extends React.Component{
  render(){
    return (
		<div id="tf-shopping-cart">
			<div className="tf-list-header row clearfix">
				<div id="tf-list-product" className="one-quarter">Products</div>
				<div id="tf-list-total" className="one-quarter">Total Amount</div>
			</div>
			<ShoppingList {...this.props}/>
			
		</div>
      )
  }
}

export default ShoppingBag;