import React from "react";
import { Col, Row } from "../../components/Grid";
import { FormBtn } from "../../components/Form"

const ArticleTab = props =>
    <React.Fragment>
        <Row>
            <Col size="lg-8 s-12">
                <h4>
                    <span>
                        <em>{props.title}</em>
                    </span>
                </h4>
            </Col>

            <Col size="lg-4 s-12">
                <span className="btn-group pull-right" >
                    <FormBtn color="light">
                        <a href={props.url} target="_blank" className="btn btn-default">
                            View Article
                        </a>
                    </FormBtn>
                    <FormBtn color="light" className="btn btn-default" onClick={() => props.saveBtn(props._id)}>Save</FormBtn>
                </span>
            </Col>

            <p>Date Published: {props.date}</p>
        </Row>
    </React.Fragment>

export default ArticleTab;