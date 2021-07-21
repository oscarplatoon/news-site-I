import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'

class AppNav extends Component {

    displayNavItems = () => {
    return this.props.navItems.map((item, index) => {
      return (
        <Nav.Link href="#" key={index} value={item['value']} onClick={() => this.props.handleNavClick(item['value'])}>{item['label']}</Nav.Link>
      )
    })
   }

  render() {
    return (
          <Nav className="me-auto">
            {this.displayNavItems()}
          </Nav>
    )
  }
}

export default AppNav;
