import React, { Component } from 'react'
import Pieces from './Pieces'
import Link from 'next/link'

class NavPieces extends React.Component {
  constructor(props) {
    super(props)

    this.state = {"pieces": []}
    this.state = {"count": Number()}
    this.state = {"screenWidth": Number()}
  }

  componentWillMount() {
    this.setState({ pieces:Pieces })
    this.setState({ count:Number(Pieces.length) })

  }

  componentDidMount() {
    this.setState({ screenWidth:window.innerWidth })
  }

  render() {
    let factor;
    (this.state.screenWidth >= 1024) ? (factor = Number(.25)):(factor = Number(.6))
    let containerWidth = `${((Number(this.state.screenWidth) * factor) * Number(this.state.count)) + (this.state.count * 32)}px`;
    let active = ""
    const pieceData = this.state.pieces
    const pieceDisplay = pieceData.map((piece) => {
      (piece.id === this.props.id) ? ( active = "active" ) : ( active = "" )

      return (
        <div key={piece.id} className={`piece-container ${active}`}>
          <a href={`/work?id=${piece.id}`}>
            <img src={piece.thumb} />
          </a>
          <style jsx>{`
            .piece-container { display:inline-block; width:25vw; margin:0 16px; }
            .piece-container img { width:100%; }
            .piece-container a { font-family:"ajcFont"; font-style:normal }
            .active { border-top:6px solid #F5D123; padding-top:8px }
            .active img { opacity:.5 }

            @media screen and (max-width:500px) {
              .piece-container { width:60vw; }
            }
          `}</style>
        </div>
      )
    })


    return (
      <div className="slide-container">
        <div className="pieces-container">
          {pieceDisplay}
        </div>
        <style jsx>{`
          .slide-container { position:relative; padding:0 0 3em; overflow-x:scroll; -webkit-overflow-scrolling:touch; }
          .pieces-container { width:${containerWidth}; }

          @media screen and (max-width:1024px) {
            .slide-container { padding-bottom:1.5em; }
          }
        `}</style>
      </div>

    )
  }

}
export default NavPieces
