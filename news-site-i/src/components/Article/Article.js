// import React, { Component } from 'react';

function Article (props) {


    const { title, abstract, created_date, byline, image } = props

    const getByLine = () => {
      return byline && <h2>{ byline }</h2>
    }
    
    const getImage = () => {
      return image && <img src={ image } />
    }
    

    return (
      <div>
        <h1>{ title }</h1>
        <p>{ created_date }</p>
        { getByLine() }
         { getImage() }
          
        <p>{ abstract }</p>
      </div>
    )


 
}

export default Article;
