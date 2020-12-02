import React, { Component } from 'react';
import { Container,Image,Row,Col,ListGroup } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaLinkedinIn,FaEnvelope } from 'react-icons/fa'
import img1 from '../../images/team-1.png'
import TeamScreen2 from '../TeamScreen/TeamScreen2'
class Aboutsection3 extends Component {

     
    render() {
        
        return (
            <>
            <section className="about-section-4">
                  <Container>
                    <div className="title">
                        <h2 className="text-center">Our Team</h2>
                        <p className="text-center">The secret behind our success in delivering projects is the operational experience of our management team and resources. Our team consist of:</p>
                    </div>
                    <Row>
                        <TeamScreen2/>
                    </Row>
                  </Container>
              </section>
            </>
        );
    }
}

export default Aboutsection3;
