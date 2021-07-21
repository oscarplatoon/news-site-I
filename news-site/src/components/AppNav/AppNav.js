import React, { Component } from 'react';

function AppNav (props) {


  const renderNavItems = () => {
    let elements = props.navItems.map((item, index) => {
      return (
          <a href='#' key={index} onClick={ () => props.handleNavClick(item.value) }> 
          | { item.label } | 
          </a> 
      )
    })
    
    return <span>
      { elements }
    </span>
  }


  return (
    <nav>
      { renderNavItems() }
    </nav>
  )
}

export default AppNav;

// The `AppNav` component should return a `<nav>` component that contains `<a>`'s as children - one for every item in the `props.navItems` array.

// The AppNav component should:
// 1) Map through `props.navItems` to create an array of `<a>` elements. The objects within `props.navItems` look something like this: