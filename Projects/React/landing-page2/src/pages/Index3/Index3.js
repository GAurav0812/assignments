import React, { Component, Suspense } from 'react';
const NavbarPage = React.lazy(() => import('../../components/Navbar/Navbar_Page'));
const Section = React.lazy(() => import('./section'));
const Features = React.lazy(() => import('../../components/Features/features'));
const Services = React.lazy(() => import('../../components/Services/services'));
const Clients = React.lazy(() => import('../../components/Clients/clients'));
const OurTeam = React.lazy(() => import('../../components/Team/our-team'));
const Pricing = React.lazy(() => import('../../components/Pricing/pricing'));
const Counter = React.lazy(() => import('../../components/Counter/counter'));
const Contact = React.lazy(() => import('../../components/Contact/contact'));
const Footer = React.lazy(() => import('../../components/Footer/footer'));

class Index3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navItems : [
                { id: 1 , idnm : "home", navheading: "Home" },
                { id: 2 , idnm : "services", navheading: "Services" },
                { id: 3 , idnm : "features", navheading: "Features" },
                { id: 4 , idnm : "team", navheading: "Team" },
                { id: 5 , idnm : "pricing", navheading: "Pricing" },
                { id: 6 , idnm : "contact", navheading: "Contact" },
            ],
            pos : document.documentElement.scrollTop,
            imglight : true,
            navClass : ""
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var scrollup=document.documentElement.scrollTop;
        if(scrollup > this.state.pos)
        {
            this.setState({navClass : "darkheader", imglight : false});
        }
        else
        {
            this.setState({navClass : "", imglight : true});
        }
    };

    Loader = () => {
        return (
            <div id="preloader">
                <div id="status">
                    <div className="spinner">Loading...</div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <React.Fragment>
                <Suspense fallback = {this.Loader()} >

                    {/* Importing Navbar */}
                    <NavbarPage navItems={this.state.navItems} navclassName={this.state.navClass}/>

                    {/* Importing section */}
                    <Section/>

                    {/* Importing services */}
                    <Services isBgWhite={true}/>

                    {/* Importing features */}
                    <Features isBgWhite={false}/>

                    {/* Importing clients */}
                    <Clients/>

                    {/* Importing team */}
                    <OurTeam/>

                    {/* Importing pricing */}
                    <Pricing/>

                    {/* Importing counter */}
                    <Counter/>

                    {/* Importing contact */}
                    <Contact/>

                    {/* Importing footer */}
                    <Footer/>
                </Suspense>

            </React.Fragment>
        );
    }
}

export default Index3;