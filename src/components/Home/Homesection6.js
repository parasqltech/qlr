import React, { Component } from 'react';
import { Container,Button,Row,Col } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaAngleRight } from 'react-icons/fa'
import HomeScreen6 from '../HomeScreen/HomeScreen6'
class HomeSection6 extends Component {
     
    render() {
        
        return (
            <>

            <section className="home-section-6">
                  <Container>
                        <div className="home-section-6-data">
                            <Row className="justify-content-center ">
                                <Col xl={10} lg={10} md={12} sm={12}>
                                    <HomeScreen6/>
                                </Col>
                            </Row>
                        </div>
                  </Container>
            </section>
            </>
        );
    }
}

export default HomeSection6;
