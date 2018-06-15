import Layout from '../components/MyLayout'


export default () => (
  <Layout>
    <div className="container">
      <section className="a-spot grid col-2">
          <h1 className="align-center">A Little<br />About Me</h1>
          <p>Simply put, I believe a brand’s actions speak louder than their words (though, those certainly matter too). Human-centered design in the modern enterprise brings competitive advantage by discovering customers’ latent needs and subsequently delivering desirable customer experiences. And, when design and data science come together, smart systems seamlessly drive personalized, data-driven touchpoints and adding meaningful value to people’s lives. To me, that’s the quintessence of design.
          </p>
          <div className="portrait-container"></div>
      </section>

      <section className="grid col-2">
        <div className="align-center">
          <h2>Life</h2>
          <p>I am living the suburban dream with my wife, Aricka and my kids, Kaity (7) & Von (5) in a very confused part of Columbus—Columbus address, Gahanna ZIP code, and Westerville School District.</p>
          <ul className="decompress">
            <h3>How I decompress</h3>
            <li>Writing & recording music</li>
            <li>Playing video games with the kids</li>
            <li>Riding my motorcycle</li>
            <li>Playing (ice) hockey</li>
          </ul>
        </div>
      </section>

      <section className="grid col-2">
        <div className="align-center">
          <h2>Career</h2>
          <p>I began my design career in The School of Visual Communication Design at Kent State University, earning scholarships for my work and receiving multiple professional accolades all before graduation. After obtaining my Master of Arts—where graduate research focused on digital product design and design education—I’ve spent 14 years in the agency world producing creative solutions that drive business results.</p>
          <p>Throughout my career, I’ve worked with organizations large and small, ranging from Fortune 100 companies to local businesses and non-profits. My client work spans multiple industries for brands including P&G, Barnes&Noble, Wendy’s, Shaw Floors, Sherwin-Williams, Steelcase, OhioHealth, Hershey’s, Rockwell Automation, Victoria’s Secret, HP, Scotts Miracle-Gro, IGS Energy, and many more.</p>
          <p>Now, I’m looking to transition from digital marketing and narrow my focus on product & service design.</p>
        </div>
      </section>

      <section className="grid col-2 auto-height">
        <div className="align-center">
          <h2>Professional Accumen</h2>
          <div className="grid col-2 column-gutter row-gutter list">
            <ul>
              <h3>Design</h3>
              <li>Design Strategy</li>
              <li>Customer Experience</li>
              <li>User Experience</li>
              <li>User Interface</li>
              <li>Interaction</li>
              <li>Atomic Design & Design Systems</li>
              <li>Graphic Design</li>
            </ul>
            <ul>
              <h3>Technology</h3>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>WordPress</li>
              <li>React</li>
              <li>Next JS</li>
              <li>Swift</li>
              <li>PHP</li>
              <li>MySQL</li>
              <li>jQuery</li>
              <li>ActionScript</li>
            </ul>
            <ul>
              <h3>Methodologies</h3>
              <li>Design Thinking</li>
              <li>Lean UX</li>
              <li>Agile (SCRUM)</li>
            </ul>
            <ul>
              <h3>Software</h3>
              <li>Sketch</li>
              <li>Invision (Studio)</li>
              <li>Adobe CC</li>
              <li>Office 365</li>
              <li>XCode</li>
              <li>Atom</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="grid col-2 auto-height">
        <div className="align-center">
          <h2>Site details</h2>
          <p>This site was designed on paper—okay, the digital paper known as iPad Pro—and produced in Sketch. I then built this in React JS/Next JS, so if it’s a little buggy, please forgive me. I’m more of a prototype developer and you probably don’t want me pushing your production-level code. I wanted to learn React and see what all the ado was about, so this is the first thing I’ve made with it. I highly anticipate refactoring about 75% of this code now that I’ve shipped something. 👍</p>
        </div>
      </section>
    </div>
    <style jsx global>{`

      footer { position:absolute; width:100%; }

    `}</style>
    <style jsx>{`
      .portrait-container { position:fixed; width:75vw; height:100vh; top:0; right:0; background-image: url('/static/img/portrait.jpg'); background-repeat:no-repeat; background-position:bottom right; background-size:50%; }


      .a-spot { margin:0; }
      .a-spot h1, .a-spot p { position:relative; z-index:1000; }
      h1 { font-weight:300; text-transform:uppercase; font-size:9em; line-height:.92em; grid-column:span 2; margin:0; }
      ul { list-style:none; margin:0;padding:0; }
      li { font-weight:300; font-size:1.5em; padding:.5em 0; border-top:1px solid #d2d2d2; }
      li:last-child { border-bottom:1px solid #d2d2d2; }
      ul.decompress { width:50%; }

      @media screen and (max-width:1440px) {
        h1 { font-size:6em !important; }
        li { font-size:1.25em !important; }
      }

      @media screen and (max-width:600px) {
        .grid.col-2 { grid-template-columns:1fr !important; }
        footer { position:relative; }
        .a-spot { display:block; margin-bottom: 10vh; width:auto; }
        .portrait-container { position:relative; background-size:100%; width:100vw; background-position:top center; height:40vh; }
        h1 { font-size:3em !important; }
        section { height:auto !important; }
        li { font-size:1em; font-weight:500; }
        .list { grid-template-columns:1fr !important; }
        ul.decompress { width:100%; }
      }
    `}</style>
  </Layout>
)
