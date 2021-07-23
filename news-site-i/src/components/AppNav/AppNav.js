

function AppNav (props) {

  const renderNavItems = () => {

    let elements = props.navItems.map((item, index) => {
      return (
        <span>
          { index === 0 &&  <span>|&nbsp;&nbsp;&nbsp;&nbsp;</span> }
          <a key={`nav-${index}`}
              onClick={ () => props.handleNavClick(item.value) } 
              href="#">
              { item.label }
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      )
    })
    return elements;

  }

  
    return (
      <nav>
        { renderNavItems() }
      </nav>
    )
}

export default AppNav;
