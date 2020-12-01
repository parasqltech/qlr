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
import ServicesScreen3 from '../ServicesScreen/ServicesScreen3'
import ServicesScreen3Heading from '../ServicesScreen/ServicesScreen3Heading'
class Servicesection3 extends Component {

     
    render() {
        
        return (
            <>
            <section className="home-section-4 service-section-3">
                  <Container>
                    <div className="title">
                      <ServicesScreen3Heading/>
                    </div>
                    <Row className="">
                      <ServicesScreen3/>
                    </Row>
                  </Container>
              </section>
            </>
        );
    }
}

export default Servicesection3;
