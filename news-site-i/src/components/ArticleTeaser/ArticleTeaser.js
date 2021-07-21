import React, { Component } from 'react';

class ArticleTeaser extends Component {

  clickedOn = () => {
    this.props.handleTitleClick(this.props.id)
  }

  render() {
    return (
      <div>
        <a onClick = {this.clickedOn} href = '#'> {this.props.title}</a>
        <p>{this.props.created_date}</p>
      </div>
    )
  }
}

export default ArticleTeaser;
