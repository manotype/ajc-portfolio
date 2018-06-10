

const WorkHero = (props) => (
  <section style={{ backgroundImage:`url(${props.hero})` }}>
    <div className="hero-content container col-3">
      {props.children}
      <div className="more"><img src="/static/img/more-arrow.svg" /></div>
    </div>
    <style jsx>{`
        section { top:-144px; background:#f1f1f1; width:100%; height:100vh; background-repeat:no-repeat; background-size:cover; background-position:bottom; }
        .hero-content { display:grid; grid-template-rows:40% 40% 20%; height:100vh; }
        .more { grid-row-start:3; align-self:end; animation-name:more-arrow; animation-duration:3.75s; animation-iteration-count:infinite; animation-timing-function: ease-in-out; opacity:.5; }

        @keyframes more-arrow {
          0% { transform:translateY(0); }
          50% { transform:translateY(-16px); }
          100% { transform:translateY(0); }
        }
    `}</style>
    <style jsx global>{`
      h1 { font-weight:300; letter-spacing:-0.03em; font-size:6em; line-height:.92em; grid-column:span 3; margin:0; color:white; align-self:end; }
      .overview { color:white; grid-column:span 1; }

      @media screen and (max-width:1440px) {
        h1 { font-size:4.5em; }
      }

      @media screen and (max-width:1024px) {
        h1 { font-size:3em; }
        section { top:-88px !important; height:100vh; background-position:bottom right !important; }
        .hero-content { align-self:end; grid-template-rows:65% 25% 10% !important; }
        .more img { height:4vh }
        .overview { grid-column:span 2; }
      }
    `}</style>
  </section>
)

export default WorkHero
