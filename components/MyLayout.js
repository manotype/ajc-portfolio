import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import NavBar from './Navigation'

class Layout extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className="wrapper">
        <Header />
        <NavBar />
        { this.props.children }
        <Footer/>
      </div>
    )
  }
}
export default Layout
