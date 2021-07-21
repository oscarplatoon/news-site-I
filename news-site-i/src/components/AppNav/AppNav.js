import React, { Component } from 'react';

class AppNav extends Component {

    displayNavItems = () => {
    return this.props.navItems.map((item, index) => {
      return <a href="#" key={index} value={item['value']} onClick={() => this.props.handleNavClick(item['value'])}>{item['label']}</a>
    })
   }

  render() {
    return (
      <nav>
        {this.displayNavItems()}
      </nav>
    )
  }
}

export default AppNav;
