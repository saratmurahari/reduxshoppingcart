import React from 'react';
import axios from 'axios';
import cartList from './../../data/products.js';
import CartItem from './cartItem.js';

class ShoppingList extends React.Component{
  constructor(props) {
  	super(props);
  	this.state={
  		cartList:[]
  	}
  }

  render(){
  var _this=this;
	let cartList= _this.props.products.map((product,i) =>
    <CartItem {..._this.props} product={product} i={i} key={i}></CartItem>
	);
  	
    return (

    <ul id="tf-cart-list">
       {cartList}
      </ul>
		
      )
  }
  componentWillMount(){
  	
  }
  componentDidMount() {

    var _this=this;
    /* this.setState({
        cartList:cartList
      });*/
    /*let id=_this.props.match.params.id;
    this.cartListUrl=servicePaths.cartList;
    axios.get(_this.cartListUrl)
    .then(res => {
      this.setState({
      	cartList:cartList
      })
	});*/
  }		
}

export default ShoppingList;

