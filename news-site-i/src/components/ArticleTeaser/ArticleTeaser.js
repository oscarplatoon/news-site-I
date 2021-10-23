import React, { Component } from 'react';

class ArticleTeaser extends Component {
  render() {
    const {id, title, handleTitleClick, created_date} = this.props
    return (
      <div>
        <a onClick={() => handleTitleClick(id)}>{title}</a>
        <p> {created_date}</p>
      </div>
    )
  }
}

export default ArticleTeaser;
