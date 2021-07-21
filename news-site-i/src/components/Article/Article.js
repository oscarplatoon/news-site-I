import React, { Component } from 'react';


// Display the title inside of an <h1> tag.
// Display the created_date in a <p> tag.
// Display the byline (if it exists) in an <h2> tag.
// Display the image (if it exists) in an <img> tag (the value of image should be set to the src attribute of the <img> tag).
// Display the abstract inside of a <p> tag


class Article extends Component {
  render() {  
    const {abstract, title, created_date, byline, image} = this.props

    return (
      <div>
        <h1>{ title }</h1>
        <p>{ created_date }</p>
        {
          byline
          ? <h2>{ byline }</h2>
          : null
        }
        {
          image
          ? <img src={image} alt="pic"></img>
          : null
        }
        <p>{ abstract }</p>
      </div>
    )
  }
}

export default Article;
