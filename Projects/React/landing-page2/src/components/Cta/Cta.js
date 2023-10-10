import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class Cta extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section bg-lightgray">
                    <Container>
                        <Row className="text-center">
                            <Col sm={{size:8, offset:2}}>
                                <div className="cta-section">
                                    <h4>Are You Ready To Enjoy?</h4>
                                    <h1 className="text-uppercase">inspire your customer here!</h1>
                                    <Link to="" className="btn btn-link margin-t-30">Learn more <i className="ti-angle-double-right"></i></Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>  
            </React.Fragment>
        );
    }
}

export default Cta;