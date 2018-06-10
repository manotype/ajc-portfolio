
const MultiColumnItem = (props) => (
  <div className="item">
    <img src={`${props.img}`} />
    <h3>{props.caption}</h3>
    <p>{props.copy}</p>
    <style jsx>{`
      .item { grid-column: span 1 }
      p, h3 { padding:0 14%; line-height:1.25em; }
      img { display:block; width:100%; }
    `}</style>
  </div>
)
export default MultiColumnItem
