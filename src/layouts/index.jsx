import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Helmet from 'react-helmet';

import '../scss/main.scss';
require("typeface-exo");
require("typeface-roboto");

import ActionButtonContainer from '../containers/ActionButtonContainer';
import RemarkScreenContainer from '../containers/RemarkScreenContainer';

import MainFooter from '../components/MainFooter'; 
import MainHeader from '../components/MainHeader'; 

class DefaultLayout extends React.Component {

  render() {
    return (
      <div className="l-page-wrapper">
        <Helmet
          title="Saifee Hardware Mart"
          meta={[{ 
            name: 'description', 
            content: `Quality is our product` 
          }]}
        />    
          
        <div className={`l-page-container ${this.props.remarkScreenisActive && 'is-blurred'}`}>
          <MainHeader />
          <main className="l-main">
            {this.props.children()}
          </main>
          <MainFooter />
        </div>
        {
          (this.props.location.pathname === '/'
          || this.props.location.pathname === '/contact/') 
          && 
          <ActionButtonContainer 
            locationPathName={this.props.location.pathname}
          />
        }  
        <RemarkScreenContainer 
          locationPathName={this.props.location.pathname}
        />
      </div>
    )
  }  
}

const mapStateToProps = (state, ownProps) => {
  return { remarkScreenisActive: state.remarkScreen.isActive };
}

const mapDispatchToProps = (dispatch) => {
  return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);

