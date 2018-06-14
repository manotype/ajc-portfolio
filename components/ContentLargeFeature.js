import React, {Component} from 'react'

class ContentLargeFeature extends React.Component {
  constructor(props) {
    super(props)
  }


  render(){
    let bgImage;
    (this.props.size === 'large') ? (
      bgImage = this.props.hero
    ) : (
      bgImage = this.props.herosmall
    )

    return(
      <section>
        <div className="container light-gray grid col-3" style={{ backgroundImage:`url(${bgImage})` }}>
          <div className="align-center">
            <p>{this.props.children}</p>
          </div>
        </div>

        <style jsx>{`
            p { padding:0 14%; }
            .container { background-position:center; background-size:cover; }
            section { margin-bottom:15vh; }

            @media screen and (max-width:1440px) {
              .container { background-position: 75% 45% }
            }

            @media screen and (max-width:600px) {
              .align-center { grid-column:span 3; align-self:end; }
              p { padding:20px 12.5% 30px; margin-bottom:0; }
              section { margin-bottom:10vh; }
              .container { background-size:cover; background-position:center; }
            }
        `}</style>
      </section>
    )
  }
}

export default ContentLargeFeature
