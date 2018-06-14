import React, { Component } from 'react'
import Head from 'next/head'
import Typekit from 'react-typekit'


const Header = () => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Aaron J Cook Design &middot; Columbus, OH</title>
    </Head>
    <Typekit kitId="sro1pcj" />
    <style jsx global>{`
      @font-face { font-family: "ajcFont"; font-weight:500; src:url('/static/fonts/akk-reg.otf'); }
      @font-face { font-family: "ajcFont"; font-weight:300; src:url('/static/fonts/akk-light.otf'); }
      @font-face { font-family: "ajcFont"; font-weight:700; src:url('/static/fonts/akk-bold.otf'); }

      body { margin:0; padding-top:144px; font-family:"ajcFont","Helvetica","Arial"; color:#4a4a4a; }
      * { box-sizing: border-box; }

      @keyframes fade-in {
        from { opacity:0; transform:translateY(-1.5%); }
        to { opacity:1; transform:translateY(0%) }
      }


      .nav-menu { position:absolute; top:0; width:100%; padding:12vh 0; background-color:rgba(255,255,255,.97); height:100vh; animation-name: fade-in; animation-duration:.5s; }
      .menu-button img { height:100%; }
      button:focus { outline-color:#f2f2f2; }

      section { height:80vh; margin:0 0 10vh; position:relative; }
      section.auto-height { height:auto }
      .container { width:92%;max-width:1600px; margin:0 auto; height:100%; }

      .light-gray { background-color:#f2f2f2; }


      .grid { display:grid }
      .col-2 { grid-template-columns: 1fr 1fr; }
      .col-3 { grid-template-columns: 1fr 1fr 1fr; }
      .col-4 { grid-template-columns: 1fr 1fr 1fr 1fr; }
      .col-5 { grid-template-columns: 1fr 1fr 1fr 1fr 1fr; }
      .row-2 { grid-template-rows:1fr 1fr; }
      .row-3 { grid-template-rows:1fr 1fr 1fr; }
      .column-gutter { grid-column-gap:32px; }
      .row-gutter { grid-row-gap:32px; }
      .align-center { align-self:center; }
      .justify-center { justify-self:center; }


      a:link,a:active,a:visited {
        text-decoration:none;
        color:#4a4a4a;
        font-family:"freight-text-pro";
        font-weight:400;
        font-style:italic;
        font-size:1.125em;
        letter-spacing:.025em;
      }

      a.button {
        border-bottom:2px solid #F5D123;
      }
      a.button.gray {
        border-bottom:2px solid #9b9b9b;
      }
      a.button:before {
        display:inline-block;
        content:'';
        background-color:#f5d123;
        width:1em;
        height:1em;
        margin-right:.5em;
      }
      a.button.gray:before {
        background-color:#9b9b9b;
      }
      a.button:hover { opacity:0.65; }

      h2 { font-size:2em; font-weight:500; letter-spacing:.02em; }
      h3 { font-size: 1.5em; font-weight:500; text-transform:uppercase; }

      p { font-size:1.5em; font-weight:300; line-height:1.75em; }

      .statistic { display:block; font-weight:300; font-size:6em; line-height:1em; color:#F5D123; }
      .caption { font-weight:500; font-size:.875em; letter-spacing:.03em; text-transform:uppercase; color:#F5D123; }

      @media screen and (max-width:1440px) {
        p { font-size:1.25em; }
        .col-4 { grid-template-columns:1fr 1fr 1fr 1fr !important; }
      }

      @media screen and (max-width:600px) {
        body { padding-top:88px; }
        header { height:88px !important; min-height:64px !important; }

        section { margin:0 0 5vh; }
        .container { width:92%; }

        .col-2, .col-3, .col-4, .col-5 { grid-template-columns: 1fr 1fr !important; }
        .column-gutter { grid-column-gap:20px; }
        .row-gutter { grid-row-gap:20px; }

        h2 { font-size:1.25rem !important; }
        h3 { font-size: 1.125rem !important; }
        p { font-size:1em;  }

        .statistic { font-size:4em; }
        .previews-container { grid-template-columns:1fr !important; }
      }
    `}</style>
  </div>
)

export default Header
