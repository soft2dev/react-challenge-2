import React from 'react';

export default function Card({title, src}){
    return (    
        <div className="margin-left-5 margin-right-5">
            <img width="100px"src={src} alt={title}></img>
        </div>
    )
  }