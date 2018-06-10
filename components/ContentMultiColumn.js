import MultiColumnItem from './MultiColumnItem'

const ContentMultiColumn = (props) => (
  <section className="auto-height">
    <div className="container grid col-3" >
        {props.children}
    </div>
    <style jsx global>{`

    `}</style>
    <style jsx>{`
      section { margin-bottom:15vh; }

      @media screen and (max-width:1024px) {
        section { margin-bottom:10vh; }
        .container { grid-template-columns:1fr !important; }
        p { line-height:1.25em !important; }
      }
    `}</style>
  </section>
)

export default ContentMultiColumn
