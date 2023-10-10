import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

//Slider
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//Import Images
import img1 from "../../assets/images/clients/1.png";
import img2 from "../../assets/images/clients/2.png";
import img3 from "../../assets/images/clients/3.png";
import img4 from "../../assets/images/clients/4.png";
import img5 from "../../assets/images/clients/5.png";
import img6 from "../../assets/images/clients/6.png";
import img7 from "../../assets/images/clients/7.png";
import user from "../../assets/images/user-1.jpg";

class Clients extends Component {
    state = {
        clients : [
            { id : 1, img : img1 },
            { id : 2, img : img2 },
            { id : 3, img : img3 },
            { id : 4, img : img4 },
            { id : 5, img : img5 },
            { id : 6, img : img6 },
            { id : 7, img : img7 },
            { id : 1, img : img1 },
            { id : 2, img : img2 },
            { id : 3, img : img3 },
            { id : 4, img : img4 },
            { id : 5, img : img5 },
            { id : 6, img : img6 },
            { id : 7, img : img7 },
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },            
            960:{
                items:5
            },
            1200:{
                items:6
            }
        }
    }
    render() {
        return (
            <React.Fragment>
            <section className="section bg-testimonials">

                <Container>
                    <Row>
                        <Col sm={{size:10, offset :1 }} md={{size:8, offset : 2}}>

                            <div className="testimonial-box text-center">
                                <h1><i className="ti-quote-left"></i></h1>
                                <h4> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.</h4>
                                <img src={user} className="testi-user rounded-circle" alt="testimonials-user"/>
                                <p>- Landing page User</p>
                                <p>
                                    <span className="ti-star text-warning mr-1"></span>
                                    <span className="ti-star text-warning mr-1"></span>
                                    <span className="ti-star text-warning mr-1"></span>
                                    <span className="ti-star text-warning mr-1"></span>
                                    <span className="ti-star text-warning mr-1"></span>
                                </p>
                            </div>

                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12">
                        <OwlCarousel
                                        className="owl-theme client-images text-center"
                                        id="clients-slider"
                                        items={6}
                                        loop={false}
                                        margin={10}
                                        nav={false}
                                        dots={false}
                                        responsive = {this.state.responsive}
                                    >
                                        {
                                            this.state.clients.map((client, key) =>
                                                <div className="item" key={key} style={{width : 185}}>
                                                    <div className="">
                                                        <img src={client.img} alt="logo-img"/>
                                                    </div>
                                                </div>
                                            )
                                        }
                                </OwlCarousel> 
                        </Col>
                    </Row>

                    </Container>

                </section>
            </React.Fragment>
        );
    }
}

export default Clients;