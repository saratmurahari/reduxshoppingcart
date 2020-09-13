import constants from './../constants/constants.js';

function updateCartReducer(state = {}, action) {
  var i=action.id;
  let products,totalPrice=0,items = 0;
  switch(action.type) {
    //Donot change the existing state instead return a new state
    //One of the most common reasons that your components might not be re-rendering
    //is that you're modifying the existing state in your reducer instead 
    //of returning a new copy of state with the necessary changes 
    case constants.INCREMENT_ITEM:

      /*cloneObj.products[i].quantity=cloneObj.products[i].quantity+1;
      cloneObj.products[i].totalPrice=parseFloat(parseFloat(cloneObj.products[i].originalPrice)*parseFloat(cloneObj.products[i].quantity)).toFixed(2);
      return cloneObj;*/
      products = [...state.products];
      products[i].quantity = products[i].quantity + 1;
      products[i].totalPrice  = parseFloat(parseFloat(products[i].originalPrice) * parseFloat(products[i].quantity)).toFixed(2);
      products.forEach(function(product,index){
        totalPrice=parseFloat(totalPrice)+parseFloat(product.totalPrice);
        items=items+product.quantity;
      });
    
      state = {...state, products :  products ,totalPrice : totalPrice.toFixed(2),items:items};
      return state;
    case constants.DECREMENT_ITEM:
      products = [...state.products];
      products[i].quantity = products[i].quantity -1;
      products[i].totalPrice  = parseFloat(parseFloat(products[i].originalPrice) * parseFloat(products[i].quantity)).toFixed(2);
      products.forEach(function(product,index){
        totalPrice=parseFloat(totalPrice)+parseFloat(product.totalPrice);
        items=items+product.quantity;
      });
      state = {...state, products :  products ,totalPrice : totalPrice.toFixed(2),items:items};
      return state;
    case constants.REMOVE_ITEM:
       products = [...state.products].splice(i , i+1)
       totalPrice = products.reduce(function(prev, curr){
          return prev + curr.quantity * curr.originalPrice;
      },0);
      state = {...state, products :  products ,totalPrice : totalPrice};
       return state;
    default:
      return state;
  }
}

export default updateCartReducer;