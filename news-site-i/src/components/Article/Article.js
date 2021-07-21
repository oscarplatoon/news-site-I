import React, { Component } from 'react';

class Article extends Component {
  // returns property of byline in h2 headline
  // returnByline = () => {
  //   return this.props.byline && <h2>{this.props.byline}</h2>
  // }
  // // returns property of image and img source link location to load to page
  // returnImage = () => {
  //   const imageInfo = this.props.image && <img src = {this.props.image}/>
  //   return imageInfo
  // }

  renderIfDataExists = () => {
    if (this.props.byline) {
      return this.byline
    }
    if (this.props.img) {
      return this.props.img
    }
  };

  render() {  

    var { id, title, abstract, created_date, byline, image } = this.props
    created_date = Date(created_date)

    return (
      <div>
        <h1>{ title }</h1>
        <p>{ created_date } &nbsp;&nbsp;</p> 
        <Article>
          {this.renderIfDataExists()}
        </Article>
        <p>{ abstract }</p>

      </div>
    )
  }
}

export default Article;
