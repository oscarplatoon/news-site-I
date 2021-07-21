import React, { Component } from 'react';

class AppNav extends Component {

  handleClick = () => {
    return 
  }

  renderNavItems = () => {
    let elements = this.props.navItems.map((item, index) => {
      return (
          <a href='#' key={index} onClick={ () => this.props.handleNavClick(item.value) }> 
          | { item.label } | 
          </a> 
      )
    })
    return (
      <nav>
        { elements }
      </nav>
    )
  }

  render() {
    return (
      <nav>
        { this.renderNavItems() }
      </nav>
    )
  }
}

export default AppNav;

// The `AppNav` component should return a `<nav>` component that contains `<a>`'s as children - one for every item in the `this.props.navItems` array.

// The AppNav component should:
// 1) Map through `this.props.navItems` to create an array of `<a>` elements. The objects within `this.props.navItems` look something like this: