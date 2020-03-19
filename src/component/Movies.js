import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class Movies extends Component{

    render(){
        let movies 
        if(this.props.status === "failed") movies = <h1>Ops Something Went Wrong.</h1>
        if(this.props.status === "pending") movies = <h1>Loading...</h1>
        if(this.props.status === "success") movies = this.props.entries.filter( entry => entry.releaseYear >= 2010 && entry.programType === "movie" ).sort( (a,b)=>(a.title.localeCompare(b.title)) ).slice( 1, 21 ).map
            ( 
                (entry, i) => {
                    return(
                        <div className="margin-right-10" key={i}> <img width="100px"src={entry.images["Poster Art"].url} alt="icon"></img></div>
                    )
            })
            return(
                <div className="App-nav flex-container">
                    {movies}
                </div>
            )
    }
}

const mapStateToProps = ( state ) => ({
    entries: state.entries.entries,
    status: state.entries.status
  })
    
  export default connect(mapStateToProps)(Movies)