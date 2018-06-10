import Layout from '../components/MyLayout'
import NewsTicker from '../components/NewsTicker'
import BrandExperience from '../components/BrandExperience'
import WorkPreviews from '../components/WorkPreviews'

export default () => (
  <Layout>
    <section>
      <div className="container light-gray grid col-3 row-2 column-gutter">
        <div className="ajc-structure">
        </div>
        <div className="intro align-center">
            <h1>Hello, I’m Aaron Cook</h1>
            <p>
              I am a designer that loves adding value to people’s lives by fulfilling their latent needs through utility, emotion, and technology.
            </p>
            <a href="#" className="button">Download résumé</a>
        </div>
        <div className="creds align-center">
          <ul>
            <li>Design Thinking +</li>
            <li>Product Design +</li>
            <li>User Experience +</li>
            <li>Interaction +</li>
            <li>User Interface</li>
          </ul>
        </div>
      </div>
    </section>

    <NewsTicker />

    <WorkPreviews />

    <BrandExperience />

    <style jsx>{`
      .ajc-structure {
        grid-column-end: span 2;
        grid-row-end: span 2;
        background:url('/static/img/monogram-structure.svg') center center no-repeat;
        background-size:contain;
      }
      .intro {
        grid-column:3;
        grid-row:1;
        padding:0 16%;
      }
      .creds {
        mix-blend-mode: multiply;
        background-color:#F5D123;
        padding:12% 15%;
        transform:translate(24px,24px);
      }

      h1 { font-size:1.5em; font-weight:500; text-transform:uppercase; }
      ul { list-style:none; padding:1.5em 0; }
      li { font-size:1.5em; padding:.75em 0; border-bottom:1px solid #4a4a4a; }

      @media screen and (max-width:1440px) {
        .creds { padding:10% 15%; }
        ul { padding:1em 0; }
        li { font-size:1.25em; padding:.5em 0; }
      }

      @media screen and (max-width:1024px) {
        .intro { grid-column-start:1; grid-column:span 2; padding:0 40px; }
        .creds { padding:16px 20px; grid-column:span 2; transform:translate(12px,12px) }
        ul { padding:1em 0; }
        li { padding:.5em 0; font-size:1.25em; }
        .ajc-structure { display:none; }
        .container { background-image:url('/static/img/monogram-structure.svg'); background-size:92% auto; background-repeat:no-repeat; background-position:bottom center; }
      }

    `}</style>
  </Layout>
)
