import { createStore } from 'redux';
import products from './data/products.js';
import rootReducer from './shoppingCartApp/reducers/cartUpdate.js';

const defaultState = function(){
	let totalPrice=0,items = 0;
	 products.forEach(function(product,index){
        totalPrice=parseFloat(totalPrice)+parseFloat(product.totalPrice);
        items=items+product.quantity;
      });
		return {
			products,
			totalPrice : totalPrice.toFixed(2),
			items:items
		}
}


const store = createStore(rootReducer, defaultState());

export default store;