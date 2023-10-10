import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Blog Box
import CounterBox from "./counter-box";

class Counter extends Component {
    state = {
        counters : [
            { icon : "ti-timer", end : 10, postfix : "k+", isPostfix : true, title : "Working Hours" },
            { icon : "ti-briefcase", end : 548, title : "Completed Projects" },
            { icon : "ti-user", end : 89, title : "No. of Clients" },
        ]
    }
    render() {
        return (
            <React.Fragment>
                <section className="section bg-lightgray funfacts">
                    <Container>
                        <Row className="text-center">
                            <CounterBox counters={this.state.counters} />
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Counter;