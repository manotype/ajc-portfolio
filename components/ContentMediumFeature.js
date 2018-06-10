
const ContentMediumFeature = (props) => (
  <section className="auto-height">
    <div className="container grid col-3">
      <div className="image">
        <img src={`${props.hero}`} />
      </div>
      <p className="align-center" >{props.children}</p>
      <style jsx>{`
        .image { grid-column:span 2; text-align:center }
        p { padding:14%; background-color:#f2f2f2; }
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

export default ContentMediumFeature
