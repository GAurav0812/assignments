import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Input, Button } from "reactstrap";

//Importing Modal
import ModalSection from '../../components/common/ModalSection';

class Section extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }
        this.callModal.bind(this)
    }

    callModal = () => {
        this.refs.child.openModal();
    }
    
    render() {
        return (
            <React.Fragment>
                <section className="home bg-pattern home-small" id="home">

                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="home-wrapper home-intro row vertical-content">
                                    <Col md="6">
                                        <h1>Professional Multipurpose Landing Page</h1>
                                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat arcu ut orci porta, eget porttitor felis suscipit. Sed a nisl ullamcorper, tempus augue at, rutrum lacus. Duis et turpis eros.</h4>
                                        <Link to="" className="btn btn-custom">Learn more</Link>
                                        <Link onClick={this.callModal} to="#" className="video-btn btn popup-video" id="popup-video"><i className="glyphicon glyphicon-play"></i>Watch Video</Link>
                                    </Col>

                                    <Col md="5" sm={{size:8, offset:1}}>
                                        <Form className="intro-form" action="#" id="invite" method="POST">
                                            <h5>Start free trial<span>Instant signup quick and easy</span></h5>
                                            <Input name="fname" id="fname" className="fname" placeholder="Full Name" type="text" required/>
                                            <Input type="email" placeholder="Email Address" name="email" required/>
                                            <Button type="submit" block className="btn-custom">Get Free Trial</Button>

                                            <p>By Clicking Get Trial you agree to our terms of conditions of this product</p>
                                        </Form>
                                        <span id="result"></span>
                                    </Col>
                                </div>
                            </Col>
                        </Row>
                        {/* Render ModalSection Component for Modal */}
                        <ModalSection ref="child" channel='vimeo' videoId='175710248' />
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;