import Link from 'next/link'

const Footer = () => (
  <footer>
    <div className="container">
      <div>
      <p>Aaron J Cook Design &middot; Columbus, OH</p>
      <p className="copyright">&copy; All rights reserved.</p>
      </div>
      <div className="contacts">
        <a href="https://www.linkedin.com/in/aaronjcook" target="blank"><button type="button" target="blank"><img src="/static/img/linkedin-ico.svg" /></button></a>
        <Link href="mailto:ajcook4@gmail.com"><a><button type="button"><img src="/static/img/email-ico.svg" /></button></a></Link>
        <Link href="tel:614-432-0778"><a><button type="button"><img src="/static/img/phone-ico.svg" /></button></a></Link>
      </div>
    </div>
    <style jsx>{`
      footer { background-color:#f2f2f2; padding:2em 0; }
      button { border: none; background:none; margin:0 3em; }
      button:hover { cursor: pointer; }
      button img { width:25%; }
      .container { width:92%; max-width:1600px; margin:0 auto; height:100%; display:grid; grid-template-columns:1fr 1fr; }
      p { text-transform: uppercase; font-weight:500; margin:.25em 0; }
      .copyright { font-family:"freight-text-pro"; font-weight:300; font-style:italic; font-size:1.125em; letter-spacing:.06em; text-transform:none; }
      .contacts { text-align:right; align-self:center; }

      @media screen and (max-width:1440px) {
        button { margin:0.25em; }
      }

      @media screen and (max-width:1024px) {
        .container { grid-template-columns:1fr; text-align:center; }
        button img { width:30px; }
        .contacts { padding:20px 0 0; }
        .copyright { font-size:1em; }
      }
    `}</style>
  </footer>
)

export default Footer
