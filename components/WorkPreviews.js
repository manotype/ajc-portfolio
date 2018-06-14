import React, { Component } from 'react'
import 'isomorphic-unfetch'
import Pieces from './Pieces'


class WorkPreviews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {"pieces":[]}
  }

  componentWillMount() {
    this.setState({pieces:Pieces})
  }

  render() {
    return(
      <section className="auto-height">
        <div className="container">
          <h2>Featured Work</h2>
          <div className="grid col-3 column-gutter row-gutter">
          //fixed column issue
          {
            this.state.pieces.map((piece,i) => (
              (i<3) ? (
                <section key={i} className="light-gray grid col-3 preview-container" style={{backgroundImage:`url(${piece.previewImage})` }}>
                  <div className="preview-info align-center">
                    <h3>{piece.name}</h3>
                    <p>{piece.previewBlurb}</p>
                  </div>
                  <div className="cta align-center">
                    <a className="button gray" href={`work?id=${piece.id}`}>{piece.previewCTA}</a>
                  </div>
                </section>
              ):(
                <a className="secondary-feature-link" href={`/work?id=${piece.id}`}>
                <div key={i} className="secondary-feature grid light-gray" style={{ backgroundImage:`url(${piece.previewImage})`, backgroundPosition:"center" , backgroundSize:"cover" }}>
                  <div className="nameplate">{piece.name}</div>
                </div>
                </a>
              )
            ))
          }
          </div>
        </div>
        <style jsx>{`
          .preview-container { grid-column:span 3; grid-template-rows: 25% 50% 25%; background-position:center; background-size:cover; }
          .preview-info { background-color:#F5D123; mix-blend-mode:multiply; padding:19%; grid-row-start:2; }
          .preview-info p{ border-top:1px solid #4a4a4a; border-bottom:1px solid #4a4a4a; padding:.25em 0; }
          .cta { grid-row-start:3; padding:0 19%; }
          .secondary-feature { min-height:400px; }
          .secondary-feature-link { font-family:"ajcFont"; font-style:normal; display:block; }
          .nameplate { align-self:end; background-color:#F5D123; mix-blend-mode:multiply; transform:translate(8px,8px); padding:.5em 1em; text-transform:uppercase; }

          @media screen and (max-width:1440px) {
            .preview-container { background-position:50% 42% !important; }
            .preview-info { padding:12%; }
          }

          @media screen and (max-width:600px) {
            .preview-info { grid-column:span 3; padding:25px; width:90%; mix-blend-mode:normal; }
            h3 { margin:0; }
            p { margin:0 0 .5em; line-height:1.25em; }
            .preview-container { grid-template-rows: 65% 22% 12%; background-size:200% !important; }
            .cta { grid-column:span 3; }
            .secondary-feature { margin-bottom:24px; }
            .secondary-feature-link { grid-column:span 3 !important; }
          }
        `}</style>
      </section>
    )
  }
}


export default WorkPreviews
