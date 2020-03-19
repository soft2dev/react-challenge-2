import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom';
import './App.css';

class HOME extends Component{

    render(){
        return(
        <nav className='App-nav flex-container'>
            <Link to='/series'>        
            <div className="bg-image">
              <h1>SERIES</h1>
            </div>
            Series
            </Link>
            <Link to='/movies'>
            <div className="bg-image"> 
              <h1>MOVIES</h1>
            </div>
            Movies
            </Link>             
        </nav>
        )
    }
}

export default HOME
  