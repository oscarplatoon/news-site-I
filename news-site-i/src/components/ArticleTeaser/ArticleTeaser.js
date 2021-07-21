import React, { Component } from 'react';



// Display the title inside of an <a> tag.
// When the title <a> tag is clicked, it should call this.props.handleTitleClick(this.props.id);. Will arrow functions be useful here?
// Display the created_date in a <p> tag.


const ArticleTeaser = (props) => {
  
    return (
      <div>
        <a onClick={ () => props.handleTitleClick(props.id) } href="#">{ props.title }</a>
        <p>{props.create_date}</p>
      </div>
    )
}

export default ArticleTeaser;
