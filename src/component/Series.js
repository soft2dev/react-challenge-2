import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class Series extends Component{

    render(){
        let series = this.props.entries.filter( entry => entry.releaseYear >= 2010 && entry.programType === "series" ).sort( (a,b)=>(a.title.localeCompare(b.title)) ).slice( 1, 21 ).map
        ( 
            (entry, i) => {
                return(
                    <div className="margin-right-10" key={i}> <img width="100px"src={entry.images["Poster Art"].url} alt="icon"></img></div>
                )
        })
        return(
            <div className="App-nav flex-container">
                {series}
            </div>
        )
    }
}

const mapStateToProps = ( state ) => ({
    entries: state.entries.entries
  })
    
  export default connect(mapStateToProps)(Series)
  