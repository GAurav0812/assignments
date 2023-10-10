import React, { Component } from 'react';
import { Col } from "reactstrap";

import CountUp from 'react-countup';

class CounterBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.counters.map((counter, key) =>
                    <Col sm="4" key={key} className="facts">
                    <i className={counter.icon}></i>
                    {
                        counter.isPostfix === true ?
                            <h1> <span className="counter"><CountUp end={counter.end} duration={6} /></span> {counter.postfix}</h1>
                        :   <h1 className="counter"><CountUp end={counter.end} duration={6} /></h1>
                    }
                    <h5>{counter.title}</h5>
                </Col>
                    )
                }
            </React.Fragment>
        );
    }
}

export default CounterBox;