import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Components
import SectionTitle from "../../components/common/section-title";

//Import Team Box
import TeamBox from "./team-box";

//Import Images
import team1 from "../../assets/images/team/team1.jpg";
import team2 from "../../assets/images/team/team2.jpg";
import team3 from "../../assets/images/team/team3.jpg";

class OurTeam extends Component {
  state = {
    members: [
      {
        id: 1,
        name: "Andrew Sparks",
        image: team1,
        post: "CEO/Founder",
        desc:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
        socials: [
          { class: "bg-twitter", icon: "ti-twitter-alt", link: "#" },
          { class: "bg-dribbble", icon: "ti-dribbble", link: "#" },
          { class: "bg-linkedin", icon: "ti-linkedin", link: "#" },
        ],
      },
      {
        id: 2,
        name: "Hubert Brandt",
        image: team2,
        post: "CTO/Co-Founder",
        desc:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
        socials: [
          { class: "bg-googleplus", icon: "ti-google", link: "#" },
          { class: "bg-facebook", icon: "ti-facebook", link: "#" },
          { class: "bg-linkedin", icon: "ti-linkedin", link: "#" },
        ],
      },
      {
        id: 3,
        name: "David Downs",
        image: team3,
        post: "Web Designer",
        desc:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
        socials: [
          { class: "bg-twitter", icon: "ti-twitter-alt", link: "#" },
          { class: "bg-dribbble", icon: "ti-dribbble", link: "#" },
          { class: "bg-linkedin", icon: "ti-linkedin", link: "#" },
        ],
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <section className="section bg-lightgray" id="team">
          <Container>
            <SectionTitle title1="Our Creative" title2="Team" />

            <Row>
              <TeamBox members={this.state.members} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default OurTeam;
