import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import ArticleTab from "../../components/ArticleTab"
import SavedTab from "../../components/SavedTab"
import Nav from "../../components/Nav"

class Saved extends Component {
  state = {
    queriedArts: [],
    savedArts: [],
    topic: "",
    startYear: "",
    endYear: ""
  };

  componentDidMount() {
    this.loadSaved();
  }

  loadSaved = () => {
    API.getArticle().then(res =>
      this.setState({
        savedArts: res.data
      }))
  }

  renderArts = () => {
    return this.state.queriedArts.slice(0, 5).map(art => (
      <ArticleTab
        _id={art._id}
        key={art._id}
        title={art.headline.main}
        date={art.pub_date}
        url={art.web_url}
        saveBtn={this.saveBtn}
        getSavedArts={this.loadSaved}
      />
    ))
  }

  renderSaved = () => {
    return this.state.savedArts.map(art => (
      <SavedTab
        _id={art._id}
        key={art._id}
        title={art.title}
        date={art.datePub}
        author={art.author}
        url={art.link}
        deleteBtn={this.deleteBtn}
        getSaveArts={this.loadSaved}
      />
    ))
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    API.searchNYT(this.state.topic, this.state.startYear, this.state.endYear).then(res => {
      this.setState({
        queriedArts: res.data.response.docs
      })
    })
  }

  saveBtn = (id) => {
    const findById = this.state.queriedArts.find(res => res._id === id)
    const newSaved = { title: findById.headline.main, datePub: findById.pub_date, link: findById.web_url }
    API.saveArticle(newSaved).then(this.loadSaved())
  }

  deleteBtn = (id) => {
    API.deleteArticle(id).then(this.loadSaved())
  }

  searchTopic = event => {
    this.setState({
      topic: event.target.value
    })
  }

  searchStartYear = event => {
    this.setState({
      startYear: event.target.value
    })
  }

  searchEndYear = event => {
    this.setState({
      endYear: event.target.value
    })
  }
  render() {
    return (
      
      <Container>
        <Nav />
        {(this.state.savedArts.length > 0)?
          <Row>
            <Col size="md-12">
              <div className="panel panel-primary">

                <div className="panel-heading">
                  <h3 className="panel-title">
                    <strong>
                      <i className="fa fa-download" aria-hidden="true"></i> Saved Articles</strong>
                  </h3>
                </div>

                <List>
                  <ListItem>
                    {this.renderSaved()}
                  </ListItem>
                </List>

              </div>
            </Col>
          </Row>
        : <p>No Saved Articles</p> 
      }
      </Container>
    );
  }

}

export default Saved;
