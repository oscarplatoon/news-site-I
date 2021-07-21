

const AppNav = (props) => {

  const renderNavItems = () => {
    let elements = props.navItems.map(item => <a href="#" onClick={()=> props.handleNavClick(item.value) }>{item.label}&nbsp;|&nbsp;&nbsp;</a>)
    return elements
  }

    const {} = props
  return (
    <nav>
      { renderNavItems() }
    </nav>
    )
}

export default AppNav;
