// import React, { Component } from 'react';

function ArticleTeaser (props) {
  
  const handleClick = () => {
    props.handleTitleClick(props.id)
  }

  
    return (
      <div>
        <a onClick={ handleClick } href="#">{ props.title }</a>
        <p>{ props.created_date }</p>
      </div>
    )
}

export default ArticleTeaser;
