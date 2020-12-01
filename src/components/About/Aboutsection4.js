import React, { Component } from 'react';
import { Container,Image,Row,Col,ListGroup } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaLinkedinIn,FaEnvelope } from 'react-icons/fa'
import img1 from '../../images/team-1.png'
class Aboutsection3 extends Component {

     
    render() {
        
        return (
            <>
            <section className="about-section-4">
                  <Container>
                    <div className="title">
                        <h2 className="text-center">Our Team</h2>
                        <p className="text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                    </div>
                    <Row>
                        <Col xl={4} lg={4} md={6} sm={12} className="mb-0">
                            <div className="team-block">
                                <div className="inner-box">
                                    <div className="image">
                                        <Link className="nav-link p-0" to="/">
                                            <Image src={img1} className="" fluid/>
                                        </Link>
                                        
                                        <div className="texts">
                                            <p className="font-regular text-white align-justify">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur</p>
                                        </div>
                                    </div>
                                    <div className="lower-box">
                                        <ListGroup as="ul" className="social-box">
                                            <ListGroup.Item as="li" className="">
                                                <Link className="nav-link font-22" to="/">
                                                    <FaLinkedinIn/>
                                                </Link>
                                            </ListGroup.Item>
                                            <ListGroup.Item as="li" className="">
                                                <Link className="nav-link font-22" to="/">
                                                    <FaEnvelope/>
                                                </Link>
                                            </ListGroup.Item>
                                        </ListGroup>
                                        <div class="content">
                                            <h5>
                                                <Link className="nav-link" to="/">Jennifer Garcia
                                                </Link>
                                            </h5>
                                            <div class="designation">Consultant Officer</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={12} className="mb-0">
                            <div className="team-block">
                                <div className="inner-box">
                                    <div className="image">
                                        <Link className="nav-link p-0" to="/">
                                            <Image src={img1} className="" fluid/>
                                        </Link>
                                        
                                        <div className="texts">
                                            <p className="font-regular text-white align-justify">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur</p>
                                        </div>
                                    </div>
                                    <div className="lower-box">
                                        <ListGroup as="ul" className="social-box">
                                            <ListGroup.Item as="li" className="">
                                                <Link className="nav-link font-22" to="/">
                                                    <FaLinkedinIn/>
                                                </Link>
                                            </ListGroup.Item>
                                            <ListGroup.Item as="li" className="">
                                                <Link className="nav-link font-22" to="/">
                                                    <FaEnvelope/>
                                                </Link>
                                            </ListGroup.Item>
                                        </ListGroup>
                                        <div class="content">
                                            <h5>
                                                <Link className="nav-link" to="/">Jennifer Garcia
                                                </Link>
                                            </h5>
                                            <div class="designation">Consultant Officer</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} md={6} sm={12} className="mb-0">
                            <div className="team-block">
                                <div className="inner-box">
                                    <div className="image">
                                        <Link className="nav-link p-0" to="/">
                                            <Image src={img1} className="" fluid/>
                                        </Link>
                                        
                                        <div className="texts">
                                            <p className="font-regular text-white align-justify">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur</p>
                                        </div>
                                    </div>
                                    <div className="lower-box">
                                        <ListGroup as="ul" className="social-box">
                                            <ListGroup.Item as="li" className="">
                                                <Link className="nav-link font-22" to="/">
                                                    <FaLinkedinIn/>
                                                </Link>
                                            </ListGroup.Item>
                                            <ListGroup.Item as="li" className="">
                                                <Link className="nav-link font-22" to="/">
                                                    <FaEnvelope/>
                                                </Link>
                                            </ListGroup.Item>
                                        </ListGroup>
                                        <div class="content">
                                            <h5>
                                                <Link className="nav-link" to="/">Jennifer Garcia
                                                </Link>
                                            </h5>
                                            <div class="designation">Consultant Officer</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                  </Container>
              </section>
            </>
        );
    }
}

export default Aboutsection3;
