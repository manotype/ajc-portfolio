import React, {Component} from 'react'

class NewsTicker extends React.Component {

  render() {
    return(
      <section className="auto-height">
        <div className="container">
          <p><span>June 14 · 2018</span>I am currently looking for local or remote product design opportunities (freelance or full-time).</p>
        </div>
        <style jsx>{`
          p { text-align:center; font-family:"freight-text-pro"; font-weight:300; font-style:italic; color:#9b9b9b; letter-spacing:.06em; line-height:1.25em; }
          span { color:#4a4a4a; font-size:.75em; font-family:"ajcFont"; font-style:normal; font-weight:500; padding:0 .5em; letter-spacing:0; }
          section { padding:20px 0 !important; }
        `}</style>
      </section>
    )
  }
}

export default NewsTicker
