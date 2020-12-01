import React, { Component } from 'react';
import { Container,Image,Row,Col,Card,Button,ListGroup } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaAngleRight } from 'react-icons/fa'
import service1 from '../../images/service-1.png'
import ServicesScreen4 from '../ServicesScreen/ServicesScreen4'
import ServicesScreen4Heading from '../ServicesScreen/ServicesScreen4Heading'
class Servicesection3 extends Component {

     
    render() {
        
        return (
            <>
            <section className="service-section-4">
                  <Container>
                    <div className="title">
                      <ServicesScreen4Heading/>
                    </div>
                    <Row>
                      <ServicesScreen4/>
                    </Row>
                  </Container>
              </section>
            </>
        );
    }
}

export default Servicesection3;
