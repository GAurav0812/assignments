import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
//Import Slick Slider
import Slider from "react-slick";

//Import Slick Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="is-next" onClick={onClick}><i className="ti-arrow-circle-right"></i></div>
    );
  }
  
const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="is-prev" onClick={onClick}><i className="ti-arrow-circle-left"></i></div>
    );
  }

const title1 = <h1>Creative <span className="font-2">Multipurpose</span> Landing Page</h1>;
const title2 = <h1>We are <span className="font-2">Passionate</span> and <span className="font-2">Creative</span></h1>;

class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slides : [
                { title : title1, desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat arcu ut orci porta, eget porttitor felis suscipit. Sed a nisl ullamcorper, tempus augue at, rutrum lacus. Duis et turpis eros.", link : "#" },
                { title : title2, desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat arcu ut orci porta, eget porttitor felis suscipit. Sed a nisl ullamcorper, tempus augue at, rutrum lacus. Duis et turpis eros.", link : "#" },
            ]
        }
    }
    
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 1500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed : 3000,
            autoplay : true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        };

        return (
            <React.Fragment>
                <section className="home bg-home home-slider" id="home">

                    <div className="bg-overlay"></div>

                    <Container fluid>
                        <div id="home-slider" className="flexslider">
                            <ul className="slides">
                            <Slider {...settings}>
                                {
                                    this.state.slides.map((slide, key) =>
                                        <li key={key}>
                                            <Container>
                                                <Row>
                                                    <Col md={{size:8, offset:2}} className="text-center">
                                                        <div className="home-wrapper text-center">
                                                            <div className="">
                                                                {slide.title}
                                                                <h4>{slide.desc}</h4>
                                                                <Link to={slide.link} className="btn btn-custom">Learn more</Link>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </li>
                                    )
                                }
                                </Slider>
                            </ul>
                            
                            
                        </div>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;