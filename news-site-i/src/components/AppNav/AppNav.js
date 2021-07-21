import React, { Component } from 'react';

class AppNav extends Component {
 
  // anon function that calls on each element in the array and maps
  returnNavItems = () => {
    let values = this.props.navItems.map((item, index) => {
      return (
        <a key={`nav-${index}`} onClick={ () => this.props.handleNavClick(item.value) } href="#">{ item.label }&nbsp;|</a>
      )
    })
    return values
  }

  render() {
    return (
      <nav>
      { this.returnNavItems() }
      </nav>
    )
  }
}

export default AppNav;
