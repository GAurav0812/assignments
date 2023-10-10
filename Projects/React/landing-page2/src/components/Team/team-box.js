import React, { Component } from 'react';
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

class TeamBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.members.map((member, key) =>
                    <Col sm="4" key={key}>
                    <div className="team-box">
                        <img src={member.image} className="rounded-circle" alt=""/>
                        <h4>{member.name}</h4>
                        <h6 className="text-muted">{member.post}</h6>
                        <p>{member.desc}</p>
                        <ul className="list-inline social">
                            {
                                member.socials.map((social, key) =>
                                <li key={key} className="list-inline-item">
                                    <Link to={social.link} className={social.class + " mr-1"}><i className={social.icon}></i></Link>
                                </li>
                                )
                            }
                            
                        </ul>
                    </div>
                </Col>
                    )
                } 
            </React.Fragment>
        );
    }
}

export default TeamBox;