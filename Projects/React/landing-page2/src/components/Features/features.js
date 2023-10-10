import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

//Import Images
import mac from "../../assets/images/mac.png";
import watch1 from "../../assets/images/watch-1.png";
import FeatureBox from '../common/feature-box';

class Features extends Component {
    render() {
        return (
            <React.Fragment>
    <section className={this.props.isBgWhite === true ? "section" : "section bg-lightgray"} id="features">
        <Container>
            <Row>
                <Col sm="12">
                    <div className="title-box text-center">
                        <h2>Awesome New Feature</h2>
                    </div>
                </Col>
            </Row>
            

            <Row className="vertical-content features">
                <Col sm="5">
                    <FeatureBox
                        number="1"
                        title="We are digital creative agency"
                        desc1="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted."
                        desc2="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                        link="#"
                    />
                </Col>
                

                <Col sm={{size:6, offset : 1}}>
                    <img src={mac} className="img-fluid" alt="img"/>
                </Col>
                
            </Row>
            

            <Row className="vertical-content features">
                <Col sm="4">
                    <img src={watch1} className="img-fluid" alt="img"/>
                </Col>
                <Col sm={{size:6, offset : 1}}>

                    <FeatureBox
                        number="2"
                        title="Powerful & Optimized Code"
                        desc1="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted."
                        desc2="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                        link="#"
                    />

                </Col>
                

            </Row>
            

        </Container>
        
    </section>
            </React.Fragment>
        );
    }
}

export default Features;