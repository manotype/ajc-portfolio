
const ContentMediumFeatureRev = (props) => (
  <section className="auto-height">
    <div className="container grid col-3">
    <p className="align-center" >{props.children}</p>
      <div className="image">
        <img src={`${props.hero}`} />
      </div>
      <style jsx>{`
        .image { grid-column:span 2; text-align:center }
        p { padding:14%; }
        section { margin-bottom:15vh; }

        @media screen and (max-width:1440px) {
          img { width:85%; }
        }

        @media screen and (max-width:1024px) {
          section { margin-bottom:10vh; }
          .container { grid-template-columns:1fr !important; }
          p { padding:20px; }
          img { width:100%; }
        }
      `}</style>
    </div>


  </section>
)

export default ContentMediumFeatureRev
