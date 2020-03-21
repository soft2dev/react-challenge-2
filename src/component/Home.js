import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card'

import {
	Link
} from 'react-router-dom';
import './App.css';

class Home extends Component{

    render(){        
        const home =  (
                        <nav className='App-nav flex-container'>
                          <Link to='/series'>        
                          <div className="bg-image">
                            <h1>SERIES</h1>
                          </div>
                          Series
                          </Link>
                          <Link to='/movie'>
                          <div className="bg-image"> 
                            <h1>MOVIES</h1>
                          </div>
                          Movies
                          </Link>             
                        </nav>
                      )

        if(!this.props.match) return home;
        const entryId = this.props.match.params.entryId;
        if(entryId !== 'movie' && entryId !== 'series') return home;
        let series =''
        if(this.props.status === "failed") series = <h1>Ops Something Went Wrong.</h1>
        if(this.props.status === "pending") series = <h1>Loading...</h1>
        console.log(this.props.entries)
        if(this.props.status === "success") series = this.props.entries
                                                    .filter(entry => entry.releaseYear >= 2010 && entry.programType === entryId)
                                                    .sort((a,b)=>(a.title.localeCompare(b.title)))
                                                    .slice(0, 21)
                                                    .map((entry, i) => <Card src={entry.images['Poster Art'].url} title={entry.title} key={i}/>)
        return(
            <div className="App-nav flex-container">
                {series}
            </div>
        )
      }
    }

const mapPropsToState = (state) =>({
  entries: state.entries.entries,
  status: state.entries.status
})

export default connect(mapPropsToState)(Home)