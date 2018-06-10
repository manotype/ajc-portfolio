

const ContentLargeFeature = (props) => (
    <section>
      <div className="container light-gray grid col-3" style={{ backgroundImage:`url(${props.hero})` }}>
        <div className="align-center">
          <p>{props.children}</p>
        </div>
      </div>

      <style jsx>{`
          p { padding:0 14%; }
          .container { background-position:center; background-size:cover; }
          section { margin-bottom:15vh; }

          @media screen and (max-width:1440px) {
            .container { background-position: 75% 45% }
          }

          @media screen and (max-width:1024px) {
            .align-center { grid-column:span 3; align-self:end; }
            p { padding:20px 20px 30px; line-height:1.25em; margin-bottom:0; }
            section { margin-bottom:10vh; }
            .container { background-size:200%; background-position: 75% 60%; }
          }
      `}</style>
    </section>
)

export default ContentLargeFeature
