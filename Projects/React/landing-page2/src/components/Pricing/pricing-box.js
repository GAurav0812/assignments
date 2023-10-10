import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Col } from "reactstrap";

class PricingBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.pricings.map((pricing, key) =>
                    <Col key={key} sm="4">
                        <div className={pricing.isActive === true ? "pricing-box active" : "pricing-box"}>
                            <div className="pricing-header">
                                <div className="plan-title">
                                    {pricing.title}
                                </div>
                                <div className="plan-price">
                                    ${pricing.price}
                                </div>
                                <div className="plan-month text-muted">
                                    per {pricing.duration}
                                </div>
                            </div>

                            <ul className="list-unstyled plan-features">
                                <li><b>{pricing.features.hosting}</b> Hosting</li>
                                <li>Upto <b>{pricing.features.users}</b> users</li>
                                <li><b>{pricing.features.database}</b> databases</li>
                                <li>{pricing.features.other}</li>
                                <li><b>{pricing.features.support}</b> Support</li>
                                <li>{pricing.features.other2}</li>
                            </ul>

                            <div className="text-center margin-t-30">
                                <Link to="" className="btn btn-custom btn-sm">Buy Now</Link>
                            </div>
                        </div>
                    </Col>
                    )
                }
            </React.Fragment>
        );
    }
}

export default PricingBox;