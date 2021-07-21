import React, { Component } from 'react';



// 1. Display the title inside of an <a> tag.
// 2. When the title <a> tag is clicked, it should call this.props.handleTitleClick(this.props.id);. Will arrow functions be useful here?
// 3. Display the created_date in a <p> tag.


class ArticleTeaser extends Component {
  
    handleClick = () => {
        this.props.handleTitleClick(this.props.id)
    }

    render() {
    return (
      <div>
          <a onClick={ this.handleClick } href="#">{ this.props.title }</a>
          <p>{ this.props.created_date }</p>
      </div>
    )
  }
}

export default ArticleTeaser;
