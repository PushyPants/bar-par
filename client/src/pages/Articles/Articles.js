import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import ArticleTab from "../../components/ArticleTab"
import SavedTab from "../../components/SavedTab"
import Search from "../../components/Search";
import Nav from "../../components/Nav"

class Articles extends Component {
  state = {
    queriedArts: [],
    savedArts: [],
    topic: "",
    startYear: "",
    endYear: ""
  };

  componentDidMount() {
    this.NYTsearch("Javascript", 2017, 2018);
    this.renderArts();
    this.loadSaved();
    this.setState({
      topic: "Iraq",
      startYear: 1999,
      endYear: 2000
    })
  }

  loadSaved = () => {
    API.getArticle().then(res=>
      this.setState({
        savedArts:res.data
      }))
  }

  renderArts = () => {
    return this.state.queriedArts.slice(0,5).map(art =>(
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
    this.NYTsearch(this.state.topic, this.state.startYear, this.state.endYear);
  }

  NYTsearch = (topic, startYear, endYear) => {
    API.searchNYT(topic, startYear, endYear).then(res => {
      let tempArr = res.data.response.docs;
      let tempSaved = this.state.savedArts.map(x => x.title);

      tempArr = tempArr.filter(val => !tempSaved.includes(val.headline.main))

      this.setState({
        queriedArts: tempArr
      })
    })
  }

  saveBtn = (id) => {
    const findById = this.state.queriedArts.find(res => res._id === id)
    const index = this.state.queriedArts.indexOf(findById)
    const tempArr = [...this.state.queriedArts]
    tempArr.splice(index, 1);

    this.setState({
      queriedArts : tempArr
    });

    console.log(this.state.savedArts)

    const newSaved = {title: findById.headline.main, datePub: findById.pub_date, link: findById.web_url}
    API.saveArticle(newSaved).then(this.loadSaved())
  }

  deleteBtn = (id) => {
    API.deleteArticle(id).then(this.loadSaved())
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Container>
        <Nav />
        <Row>
          <Col size="md-4">
            <Search
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </Col>

          <Col size="md-8">
          <Row>
            <Col size="md-12">
              {(this.state.queriedArts.length > 0)?

                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">
                      <strong>
                        <i className="fa fa-download" aria-hidden="true"></i>Results</strong>
                    </h3>
                  </div>
                    <List>
                      <ListItem>
                        {this.renderArts()}
                      </ListItem>
                    </List>
                  </div>

                    : null
                }
                
                {(this.state.savedArts.length > 0)?

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

                : null }

              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles; 
