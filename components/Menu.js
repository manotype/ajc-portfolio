import React, { Component } from 'react'
import Link from 'next/link'
import NavPieces from './NavPieces'

class NavMenu extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    const isOpen = this.props.open;

    const output = isOpen ? (
      <div className="nav-menu">
        <div className="container auto-height work-section">
          <h2>Work</h2>
        </div>
        <div>
          <NavPieces id={this.props.id} />
        </div>
        <div className="container grid col-2 column-gutter">
          <div className="responsive-grid">
            <h2>About</h2>
            <Link href="/about"><a><p className="menu-link">About Me</p></a></Link>
            <a href="/static/ajcook-cv-2018.pdf" download><p className="menu-link">Download Résumé</p></a>
          </div>
          <div className="responsive-grid contact">
            <div className="grid col-3 column-gutter contact-items">
              <div><Link href="https://www.linkedin.com/in/aaronjcook"><a href="https://www.linkedin.com/in/aaronjcook" target="blank"><img src="/static/img/linkedin-ico.svg" /><br /><p>Linked In</p></a></Link></div>
              <div><Link href="mailto:ajcook4@gmail.com"><a><img src="/static/img/email-ico.svg" /><br /><p>ajcook4@gmail.com</p></a></Link></div>
              <div><Link href="tel:614-432-0778"><a><img src="/static/img/phone-ico.svg" /><br /><p>614·432·0778</p></a></Link></div>
            </div>
          </div>
        </div>
        <style jsx>{`
          h2 { font-size:3em; letter-spacing:0; border-bottom:4px solid #F5D123; }
          .container { height:auto; }
          .contact-items { text-align: center; margin-top:3em; }
          .responsive-grid.contact { align-self:end; }
          a { font-family:"ajcFont"; font-style:normal; }
          .menu-link:before { display:inline-block; content:''; width:24px; height:24px; background-color:#F5D123; margin-right:24px; }
          .contact-items img { width:40px; height:40px; }

          @media screen and (max-width:1024px) {
            .responsive-grid { grid-column:span 2; }
            .contact-items { font-size:.75em; font-weight:500 !important; grid-template-columns:1fr 1fr 1fr !important; }
            .work-section h2 { margin-top:1em; }
            h2 { margin-top:0; }
            .menu-link:before { width:16px; height:16px; margin-right:8px; }
            p { margin:.5em 0; }
            .contact-items img { width:30px; height:30px; }
          }
        `}</style>
      </div>
    ) : (
      ''
    );

    return(
      <div>
        {output}

      </div>
    )
  }
}

export default NavMenu
