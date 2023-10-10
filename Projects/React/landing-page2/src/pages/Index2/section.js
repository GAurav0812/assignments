import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

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
                                <div className="home-wrapper text-center row">
                                    <Col md={{size : 8, offset : 2}}>
                                        <h1>Creative Multipurpose Landing Page</h1>
                                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat arcu ut orci porta, eget porttitor felis suscipit. Sed a nisl ullamcorper, tempus augue at, rutrum lacus. Duis et turpis eros.</h4>
                                        <Link to="" className="btn btn-custom mr-1">Learn more</Link>
                                        <Link onClick={this.callModal} to="#" className="video-btn btn popup-video" id="popup-video"><i className="ti-control-play"></i>Watch Video</Link>
                                    </Col>
                                </div>
                            </Col>
                        </Row>
                        {/* Render ModalSection Component for Modal */}
                        <ModalSection ref="child" channel='vimeo' videoId='99025203' />
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;