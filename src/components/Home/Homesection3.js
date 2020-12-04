import React, { Component } from 'react';
import { Container,Image,Row,Col,Card,Button,ListGroup } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaAngleRight } from 'react-icons/fa'
import card1 from '../../images/home-card-1.png'
import card2 from '../../images/home-card-2.png'
import card3 from '../../images/home-card-3.png'
import card4 from '../../images/home-card-4.png'
import HsImage1 from '../HomeScreen/HsImage1'
import HomeScreen3Title from '../HomeScreen/HomeScreen3Title'
class HomeSection3 extends Component {

     
    render() {
        
        return (
            <>
            
            <section className="home-section-3">
                <Container>
                 <HomeScreen3Title/>
                  <HsImage1/>
                </Container>
              </section>

            </>
        );
    }
}

export default HomeSection3;
