import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

//Import Images
import macbook from "../../assets/images/macbook.png";

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
                <section className="home bg-pattern home-showcase" id="home">

                    <div className="bg-overlay"></div>

                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="home-wrapper text-center row">
                                    <Col md={{size:8, offset:2}} className="col-md-8 offset-md-2">
                                        <h1>Don’t Wait - Launch Your Startup Now</h1>
                                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat arcu ut orci porta, eget porttitor felis suscipit. Sed a nisl ullamcorper, tempus augue at, rutrum lacus. Duis et turpis eros.</h4>

                                        <img src={macbook} alt="img" className="img-fluid center-block"/>

                                    </Col>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;