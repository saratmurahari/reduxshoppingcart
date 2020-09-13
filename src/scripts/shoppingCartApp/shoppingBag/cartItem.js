import React from 'react';
import cartItem from './cartItem.js';

class CartItem extends React.Component{
  constructor(props) {
  	super(props);
  	this.state={
  		qty:props.product.quantity
  	}
  }
  handleInput(e){
    this.setState({
      qty:e.target.value
    })
  }
  render(){
  var _this=this;
  const {i,product}=_this.props;
  var decrementButton;
  if (_this.state.qty > 1) {
    decrementButton=<button type="button" className="reduce" onClick={this.props.decrementItem.bind(null,i)} title="reduce" >-</button>
  }
  else{
    decrementButton=<button type="button" className="reduce" disabled="disabled" onClick={this.props.decrementItem.bind(null,i)} title="reduce" >-</button>
  }
  

    return (

    <li className="tf-cart-item row clearfix" key={product.productId}>
          <div className="tf-product-img">
            <img title="img" src={product.imgUrl} />
          </div>
          <div className="tf-cart-item-right">
            <div className="tf-cart-item-right-inner">
              <div className="tf-cart-item-details three-quarter">  
                <div className="tf-product-name">{product.brand}</div>
                <div className="tf-product-name">{product.name}</div>
                <div className="tf-originalPrice ">
                  <span className="tf-item-label">Size</span>
                  {product.size}
                </div>
                <div className="tf-originalPrice ">
                  <span className="tf-item-label">Price</span>
                  <i className="fa fa-inr">&nbsp;</i>{product.originalPrice}
                   <span className="tf-info">per item</span>
                </div>
                <div className="tf-number-wrapper">
                  <span className="tf-item-label">Qty</span>
                  <div className="tf-number-holder-wrapper">
                    <span className="tf-number-holder ">
                      {decrementButton}
                      <input type="number" className="tf-item-qty tf-input-number" disabled="disabled" onChange={this.handleInput.bind(this)} name="qty"  maxLength="2" value={_this.state.qty} />
                      <button type="button" className="increase" onClick={this.props.incrementItem.bind(null,i)} title="increase" >+</button>
                    </span>
                  </div>
                </div>
              </div>
              <div className="tf-totalPrice one-quarter">
                <i className="fa fa-inr">&nbsp;</i>{product.totalPrice}</div>
              </div>
          </div>
          
      </li>
		
      )
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      qty:nextProps.product.quantity
    })
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

export default CartItem;

