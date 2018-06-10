import React, { Component } from 'react'

class MenuButton extends React.Component {
  render(){
    return(
      <button type="button" className="menu-button">
        {this.props.children}
      </button>
    )
  }
}

export default MenuButton
