import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";

const Search = props =>
    <Container>
        <Row>
            <Col size="lg-12">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            <strong>
                                <i className="fa fa-search" aria-hidden="true"></i> Search
                            </strong>
                        </h3>
                    </div>

                    <div className="panel-body">
                        <form>

                            <div className="form-group">
                                <label htmlFor="topic">Topic</label>
                                <Input onChange={props.handleInputChange}
                                    type="text"
                                    className="form-control" 
                                    id="topic" 
                                    aria-describedby="emailHelp"
                                    name="topic" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="start-year">Start Year</label>
                                <Input onChange={props.handleInputChange}
                                    type="text"
                                    className="form-control"
                                    id="start-year"
                                    name="startYear"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="end-year">End Year</label>
                                <Input onChange={props.handleInputChange}
                                    type="text"
                                    className="form-control"
                                    id="end-year"
                                    name="endYear"/>
                            </div>

                            <FormBtn onClick={props.handleFormSubmit}
                                type="submit"
                                className="btn btn-primary">
                                Submit
                            </FormBtn>
                            
                        </form>
                    </div>
                </div>
            </Col>
        </Row>

        <br /><br />

        
        <br /><br />
    </Container>


export default Search;