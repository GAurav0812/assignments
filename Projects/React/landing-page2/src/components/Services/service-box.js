import React, { Component } from 'react';
import { Col } from "reactstrap";

class ServiceBox extends Component {

    render() {
        return (
            <React.Fragment>
                {
                    this.props.services.map((service, key) =>
                    <Col key={key} sm="4">
                        <div className="services-box">
                            <i className={service.icon}></i>
                            <h4>{service.title}</h4>
                            <p>{service.desc}</p>
                        </div>
                    </Col>
                    )
                }
            </React.Fragment>
        );
    }
}

export default ServiceBox;