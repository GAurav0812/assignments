import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Pricing
import PricingBox from './pricing-box';

class Pricing extends Component {
    state = {
        pricings : [
            { id : 1, title : "Economy Plan", price : "9", duration : "month",
                features : 
                    { hosting : "1", users : "10", database : "3", other : "Website builder", support : "Free", other2 : "Basic Updates" }
                
            },
            { id : 2, title : "Deluxe Plan", price : "19", duration : "month", isActive : true,
                features : 
                    { hosting : "9", users : "100", database : "10", other : "Website builder", support : "Free", other2 : "Premium Updates" }
                
            },
            { id : 3, title : "Ultimate Plan", price : "29", duration : "month",
                features : 
                    { hosting : "Unlimited", users : "1000", database : "Unlimited", other : "Website builder", support : "Free", other2 : "Premium Updates" }
                
            },
        ]
    }
    render() {
        return (
            <React.Fragment>
    <section className="section" id="pricing">
        <Container>

        <SectionTitle title1="Simple" title2="Pricing" />
            

            <Row>
                <Col md={{size:10, offset:1}}>
                    <Row className="pricing-section">
                        <PricingBox pricings={this.state.pricings} />
                    </Row>
                </Col>
            </Row>
            

        </Container>
        
    </section>
            </React.Fragment>
        );
    }
}

export default Pricing;