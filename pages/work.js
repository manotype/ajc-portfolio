import React, { Component } from 'react'
import Layout from '../components/MyLayout'
import WorkHero from '../components/WorkHero'
import ContentMultiColumn from '../components/ContentMultiColumn'
import ContentLargeFeature from '../components/ContentLargeFeature'
import ContentMediumFeature from '../components/ContentMediumFeature'
import ContentMediumFeatureRev from '../components/ContentMediumFeature-rev'
import MultiColumnItem from '../components/MultiColumnItem'
import ContentText from '../components/ContentText'
import Pieces from '../components/Pieces'
import NavPieces from '../components/NavPieces'

class Work extends React.Component {
  constructor(props) {
    super(props);

    this.state = { "Piece" : [] }
    this.state = { "Sections": []}
    this.state = { "PieceID": Number() }
    this.placeComponent = this.placeComponent.bind(this)
    this.state = { "Screen":"" }
  }

  componentWillMount() {
    const id = this.props.url.query.id - 1
    const piece = Object.keys(Pieces).map((key)=> {
      (Number(key) === id) ? (
        this.setState({Piece:Pieces[key]})
      ):('')
    })
    this.setState({PieceID:Number(this.props.url.query.id)})
  }

  componentDidMount() {
    if(window.innerWidth > 600) {
      this.setState({Screen:"large"})
    } else {
      this.setState({Screen:"small"})
    }
  }

  placeComponent(sectionTag,key) {
    switch(sectionTag) {
      case 'columns':
        return (
        <ContentMultiColumn>
          <MultiColumnItem img={this.state.Piece.details.sections[key].img1} caption={this.state.Piece.details.sections[key].caption1} copy={this.state.Piece.details.sections[key].copy1} />
          <MultiColumnItem img={this.state.Piece.details.sections[key].img2} caption={this.state.Piece.details.sections[key].caption2} copy={this.state.Piece.details.sections[key].copy2}  />
          <MultiColumnItem img={this.state.Piece.details.sections[key].img3} caption={this.state.Piece.details.sections[key].caption3} copy={this.state.Piece.details.sections[key].copy3}  />
        </ContentMultiColumn>
        )
      case 'large':
        return <ContentLargeFeature hero={this.state.Piece.details.sections[key].img} herosmall={this.state.Piece.details.sections[key].imgsmall} size={this.state.Screen}>{this.state.Piece.details.sections[key].p}</ContentLargeFeature>
      case 'medium':
        return <ContentMediumFeature hero={this.state.Piece.details.sections[key].img}>{this.state.Piece.details.sections[key].p}</ContentMediumFeature>
      case 'medium-rev':
        return <ContentMediumFeatureRev hero={this.state.Piece.details.sections[key].img}>{this.state.Piece.details.sections[key].p}</ContentMediumFeatureRev>
      case 'text':
        return <ContentText headline={this.state.Piece.details.sections[key].headline} copy={this.state.Piece.details.sections[key].copy}>{ (this.state.Piece.details.sections[key].result) ? (<p><span className="statistic">{this.state.Piece.details.sections[key].result}</span><span className="caption">{this.state.Piece.details.sections[key].caption}</span></p>) : ('') }</ContentText>
    }
  }

  render() {
    let piece = this.state.Piece
    let section = this.state.Piece.details.sections
    let sectionTag = ''
    let sectionId = Number()
    let sectionDetails = []

    return(
      <Layout>
        <WorkHero hero={`${piece.details.hero}`} herosmall={`${piece.details.herosmall}`} size={this.state.Screen}>
          <h1>{piece.name}</h1>
          <div className="overview">
            <p>{piece.details.about}</p>
          </div>
        </WorkHero>
          {
            Object.keys(piece.details.sections).map((key)=> {
              sectionTag = section[Number(key)].tag
              sectionId = Number(key)
              return this.placeComponent(sectionTag,sectionId)
            })
          }
          <h2 className="container">View Other Work</h2>
          <NavPieces id={this.state.PieceID} />
      </Layout>
    )
  }
}
export default Work
