import React, { Component } from 'react';



// Display the title inside of an <a> tag.
// When the title <a> tag is clicked, it should call this.props.handleTitleClick(this.props.id);. Will arrow functions be useful here?
// Display the created_date in a <p> tag.


class ArticleTeaser extends Component {
  render() {
    return (
      <div>
        <a onClick={ () => this.props.handleTitleClick(this.props.id) } href="#">{ this.props.title }</a>
        <p>{this.props.create_date}</p>
      </div>
    )
  }
}

export default ArticleTeaser;
