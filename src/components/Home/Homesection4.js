import React, { Component } from 'react';
import { Container,Image,Row,Col,Card,Button,ListGroup } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaAngleRight } from 'react-icons/fa'
import blog1 from '../../images/home-section-4-img-1.png'
import blog2 from '../../images/home-section-4-img-2.png'
import blog3 from '../../images/home-section-4-img-3.png'
import blog4 from '../../images/home-section-4-img-4.png'
import blog5 from '../../images/home-section-4-img-5.png'
import blog6 from '../../images/home-section-4-img-6.png'
import HomeScreen4 from '../HomeScreen/HomeScreen4'
class HomeSection4 extends Component {

     
    render() {
        
        return (
            <>
            <section className="home-section-4">
                  <Container>
                    <div className="title">
                      <h2 className="text-center">Lorem ipsum dolor sit?</h2>
                      <p className="text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                    </div>
                    <Row className="">
                      <HomeScreen4/>
                    </Row>
                  </Container>
              </section>
            </>
        );
    }
}

export default HomeSection4;
