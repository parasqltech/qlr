import React, { Component } from 'react';
import { Container,Image,Row,Col,Card,Button,ListGroup } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaAngleRight } from 'react-icons/fa'
import HomeScreen5 from '../HomeScreen/HomeScreen5'

class HomeSection5 extends Component {

     
    render() {
        
        return (
            <>
            
            <section className="home-section-5">
                  <Container>
                    <div className="title">
                      <h2 className="text-center font-bold">Lorem ipsum dolor sit?</h2>
                      <p className="text-center mb-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                    </div>
                    <Row className="mt-4">
                      <HomeScreen5/>
                    </Row>
                  </Container>
              </section>
            </>
        );
    }
}

export default HomeSection5;
