import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import { FormBtn } from "../../components/Form"

const SavedTab = props =>
    <Container>
        <Row>
            <Col size="lg-8 md-12">
                <h4>
                    <span>
                        <em>{props.title}</em>
                    </span>
                </h4>    
            </Col>

            <Col size="lg-4 md-12">
                <span className="btn-group pull-right" >
                    <FormBtn color="light">
                        <a href={props.url} target="_blank" className="btn btn-default">
                            View Article
                        </a>
                    </FormBtn>
                    <FormBtn color="light" className="btn btn-default" onClick={() => props.deleteBtn(props._id)}>Delete</FormBtn>
                </span>
            </Col>
        
        <p>Date Published: {props.date}</p>
        </Row>
    </Container>

export default SavedTab;