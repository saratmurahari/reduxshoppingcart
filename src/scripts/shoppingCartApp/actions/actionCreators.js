import constants from './../constants/constants.js';

export function incrementItem(i) {
    return {
      type: constants.INCREMENT_ITEM,
      id:i
    };
}


export function decrementItem(i) {
    return {
      type: constants.DECREMENT_ITEM,
      id:i
    };
  }

export function removeItem(i) {
    return {
      type: constants.REMOVE_ITEM,
      id:i
    };
  }
