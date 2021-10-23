import React, { Component } from 'react';

class AppNav extends Component {
  render() {
  const createNavItems = () => {
    return this.props.navItems.map((navItem, index) => {
      return <a key={index} onClick={() => this.props.handleNavClick(navItem.label) }>{navItem.label}</a>
    })
  }
    return (
      <nav>
        {
          createNavItems()
        }

      </nav>
    )
  }
}

export default AppNav;
