import React, { Component } from 'react';
import facebook_white_svg from '../lib/assets/social/facebook-white.svg'
import instagram_white_svg from '../lib/assets/social/instagram-white.svg'
import twitter_white_svg from '../lib/assets/social/twitter-white.svg'
import app_store_svg from '../lib/assets/store/app-store.svg'
import paly_store_svg from '../lib/assets/store/play-store.svg'
import windows_store_svg from '../lib/assets/store/windows-store.svg'

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../reducers/Entries'

import Home from './Home'

class App extends Component{
  UNSAFE_componentWillMount(){
    this.props.getEntries();
  }
  render(){
    return(
      <Router>
      <div className='App'>
        <header className='App-header'>
          <div className="header-top dispaly-flex">
            <div className="position-relative">
                <div className="text-left"><Link className="color-white" to="/"><div><h1>DEMO Streaming</h1></div></Link></div>
                <div className="text-right">  
                  <span className="margin-right-10">Login</span>
                  <span className="margin-right-10">Start your free trial</span>  
                </div>  
            </div>              
          </div>
          <div className="header-bottom">
            <h2>Popular Titles</h2>
          </div>
        </header>
        <footer className="bg-color-dark App-footer">
          <div>
            <span className="margin-right-10">Home</span>
            <span className="margin-right-10">|</span>
            <span className="margin-right-10">Terms and Conditions</span>
            <span className="margin-right-10">|</span>
            <span className="margin-right-10">Privacy Policy</span>
            <span className="margin-right-10">|</span>
            <span className="margin-right-10">Collection Statement</span>
            <span className="margin-right-10">|</span>
            <span className="margin-right-10">Help</span>
            <span className="margin-right-10">|</span>
            <span className="margin-right-10">Manage Account</span>
          </div>
          <div className="margin-top-20">
            Copyright @ 2016 DEMO Streaming All Rights Reserved
          </div>
          <div>
            <div className="float-left margin-top-30">
              <span className="margin-right-10"><img className="social-img" src={facebook_white_svg} alt="icon"/></span>
              <span className="margin-right-10"><img className="social-img"src={twitter_white_svg} alt="icon" /></span>
              <span className="margin-right-10"> <img className="social-img" src={instagram_white_svg} alt="icon" /></span>
            </div>
            <div className="float-right margin-top-30">
              <span className="margin-right-10"><img height="40px" src={app_store_svg} alt="icon"/></span>
              <span className="margin-right-10"><img height="40px" src={paly_store_svg} alt="icon"/></span>
              <span className="margin-right-10"><img height="40px" src={windows_store_svg} alt="icon"/></span>
            </div>
          </div>
        </footer>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/:entryId' component={Home} />
          <Route exact path='/series'>
            <Home />
          </Route>
          <Route exact path='/movie'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    )
  }
}

const mapDispatchToProps = ( dispatch ) => bindActionCreators(actions, dispatch)

export default connect(null, mapDispatchToProps)(App)