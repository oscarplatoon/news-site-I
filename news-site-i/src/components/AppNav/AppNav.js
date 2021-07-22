import React, { Component } from 'react';

class AppNav extends Component {

  renderNavItems = () => {
    let elements = this.props.navItems.map((item, index) => {
      return (
        <a onClick={ () => this.props.handleNavClick(item.value) } href='#'>
          { item.label } 
        </a>   
      )
    })
    return elements
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
