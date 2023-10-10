import React, { Component } from 'react';
import { Row, Col } from "reactstrap";

class SectionTitle extends Component {
    render() {
        return (
            <React.Fragment>
            <Row>
                <Col sm="12">
                    <div className="title-box text-center">
                        <h2>{this.props.title1} <span className="font-2">{this.props.title2}</span></h2>
                    </div>
                </Col>
            </Row>
            </React.Fragment>
        );
    }
}

export default SectionTitle;