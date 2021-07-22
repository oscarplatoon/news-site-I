import React, { Component } from 'react';
import moment from 'moment';

class Article extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{moment(this.props.created_date).format("MM-DD-YYYY")}</p>
        {this.props.byline && <h2>{this.props.byline}</h2>}
        {this.props.image && <img src={this.props.image} alt={this.props.title} />}
        <p>{this.props.abstract}</p>
      </div>
    )
  }
}

export default Article;
