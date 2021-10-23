import React, { Component } from 'react';

class Article extends Component {
  render() {  
    const {id, title, abstract, byline, image, created_date} = this.props
    return (
      <div>
        <h1>{title}</h1>
        <p>{created_date}</p>
        {byline && <h2>{ byline }</h2>}
        {image && <img src={image} alt={abstract}/>}
        <p>{abstract}</p>
      </div>
    )
  }
}

export default Article;
