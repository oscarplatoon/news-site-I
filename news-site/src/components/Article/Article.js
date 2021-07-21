import React, { Component } from 'react';

class Article extends Component {

  getByline = () => {
    return this.props.byline && <h2>{ this.props.byline }</h2>
  }

  getImage = () => {
    return this.props.image && <img src={ this.props.image } alt={ this.props.title } />
  }

  render() {  
    return (
      <div>
        <h1> 
          { this.props.title }
        </h1>
        <p>
          { this.props.created_date }
        </p>
        { this.getByline() }
        { this.getImage() }
        <p>
          { this.props.abstract }
        </p>
      </div>
    )
  }
}

export default Article;

// The `Article` component should:
// 1. Display the `title` inside of an `<h1>` tag.
// 2. Display the `created_date` in a `<p>` tag.
// 3. Display the `byline` (if it exists) in an `<h2>` tag.
// 4. Display the `image` (if it exists) in an `<img>` tag (the value of `image` should be set to the `src` attribute of the `<img>` tag).
// 5. Display the `abstract` inside of a `<p>` tag.