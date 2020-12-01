import React, { Component } from 'react';
import { Container,Image,Row,Col,Card,Button,ListGroup } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaAngleRight } from 'react-icons/fa'
import ourblog1 from '../../images/our-blog-1.png'
import ourblog2 from '../../images/our-blog-2.png'
import ourblog3 from '../../images/our-blog-3.png'
import HomeScreen7 from '../HomeScreen/HomeScreen7'
import HomeScreen7Heading from '../HomeScreen/HomeScreen7Heading'
class HomeSection5 extends Component {

     
    render() {
        
        return (
            <>
            <section className="home-section-7">
                <Container>
                    <div className="title">
                        <HomeScreen7Heading/>
                    </div>
                    <Row>
                      <HomeScreen7/>
                    </Row>
                </Container>
              </section>
            </>
        );
    }
}

export default HomeSection5;
