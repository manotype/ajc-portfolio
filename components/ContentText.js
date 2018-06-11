
const ContentText = (props) => (
  <section className="auto-height">
    <div className="container grid col-4">
      <div className="col">
        <h3>{props.headline}</h3>
        <p>{props.copy}</p>
        {props.children}
      </div>
    </div>
    <style jsx>{`
      .container { border-top:1px solid #d2d2d2; border-bottom:1px solid #d2d2d2; padding:72px 0; }
      .col { grid-column-start:2; grid-column-end:span 2;  }
      section { margin-bottom:15vh; }

      @media screen and (max-width:1440px) {
        .container { padding:40px 0; }
      }

      @media screen and (max-width:600px) {
        .col { grid-column-start:1; }
        .container { padding:24px 0; }
        section { margin-bottom:10vh; }
      }
    `}</style>
  </section>
)

export default ContentText
