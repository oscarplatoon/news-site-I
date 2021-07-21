import React, { Component } from 'react';

class AppNav extends Component {

  renderNavItems = () => {
    let elements = this.props.navItems.map(item => <a href="#" onClick={()=> this.props.handleNavClick(item.value) }>{item.label}&nbsp;|&nbsp;&nbsp;</a>)
    return elements
  }

  render() {
    const {} = this.props
    return (
      <nav>
        { this.renderNavItems() }
      </nav>
    )
  }
}

export default AppNav;
