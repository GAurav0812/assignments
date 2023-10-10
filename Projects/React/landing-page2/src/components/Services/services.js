import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Service Box
import ServiceBox from "./service-box";

class Services extends Component {
    state = {
        services1 : [
           { title : "UI/UX Design", icon : "ti-ruler-pencil", desc : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet." },
           { title : "Branding Identity", icon : "ti-video-clapper", desc : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet." },
           { title : "Creative Idea", icon : "ti-light-bulb", desc : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet." },
        ],   
        services2 : [
            { title : "Easy to Use", icon : "ti-harddrives", desc : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet." },
            { title : "Dynamic Growth", icon : "ti-bar-chart-alt", desc : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet." },
            { title : "Friendly Support", icon : "ti-headphone-alt", desc : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet." },
         ],
        services3 : [
            { title : "UI/UX Design", icon : "ti-ruler-alt-2", desc : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet." },
            { title : "Branding Identity", icon : "ti-paint-roller", desc : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet." },
            { title : "Creative Idea", icon : "ti-notepad", desc : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet." },
        ],     
    }
    render() {
        return (
            <React.Fragment>
    <section className={this.props.isBgWhite === true ? "section" : "section bg-lightgray"} id="services">
        <Container>
            <SectionTitle title1="Best" title2="Services" />          

            <Row>
                <ServiceBox services={this.state.services1} />                
            </Row>      

            <Row>
                <ServiceBox services={this.state.services2} />                
            </Row> 

            <Row>
                <ServiceBox services={this.state.services3} />                
            </Row>       

        </Container>
        
    </section>
            </React.Fragment>
        );
    }
}

export default Services;