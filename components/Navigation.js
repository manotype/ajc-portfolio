import React, { Component } from 'react'
import NavMenu from './Menu'
import Link from 'next/link'

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }

  render(){
    const isOpen = this.state.isOpen

    const buttonImage = isOpen ? (
      <img src="/static/img/close-menu-button.svg" alt="Close Menu" />
    ) : (
      <img src="/static/img/menu-icon.svg" alt="Open Menu" />
    )

    return(
      <header>
        <a href='/'><img src="/static/img/ajc-monogram-dot.svg" className="site-logo" alt="Aaron J Cook" /></a>
        <a><button type="button" className="menu-button" onClick={this.toggleMenu}>
          {buttonImage}
        </button></a>
        <NavMenu open={this.state.isOpen} />
        <style jsx>{`
          .site-logo { position:absolute; }
          .site-logo, .menu-button { z-index:900; }
          #menu-button .st0 { fill:#ffffff; }
          header { position:fixed; top:0; width:100%; height:9vw; min-height:88px; max-height:144px; z-index:1000000; }
          header * { height:100%; }
          .menu-button { position:absolute; z-index:100; left:50%; transform:translateX(-50%); margin:0; padding:0; background:none; border:0px; }
          .menu-button img { height:100%; mix-blend-mode:exclusion; }
        `}</style>
      </header>

    )
  }
}
//export the React component like it was a Next component
export default NavBar
