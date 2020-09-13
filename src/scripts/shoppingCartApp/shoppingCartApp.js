import React from 'react';
import { connect } from 'react-redux';
import Header from './header/header.js';
import Footer from './footer/footer.js';
import Main from './main/maincontent.js';
import style from './../../styles/shoppingCart.scss';
import servicePaths from './../config/servicepaths.js';
import { bindActionCreators } from 'redux';
import * as actionCreators  from './actions/actionCreators.js';

class ShoppingCartApp extends React.Component{
  render(){


    return (
		<div>
			<Header />
			<Main {...this.props}/>
			<Footer/>
		</div>
      )
  }
}


export default ShoppingCartApp;