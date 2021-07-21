import React, { Component } from 'react';

// 1. Map through this.props.navItems to create an array of <a> elements. The objects within this.props.navItems look something like this:
// label => text to show
// value => value to pass to the handler function

class AppNav extends Component {

    renderNavItems = () => {
        let elements = this.props.navItems.map((item, index) => {
            return ( 
                <a key={`nav-${index}`}
                    onClick={ () => this.props.handleNavClick(item.value) } 
                    href="#">
                    { item.label }&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
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
