import React, { Component } from 'react';
import { Container,Image,Row,Col,Card,Button,ListGroup } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaAngleRight } from 'react-icons/fa'
import card1 from '../../images/home-card-1.png'
import card2 from '../../images/home-card-2.png'
import card3 from '../../images/home-card-3.png'
import card4 from '../../images/home-card-4.png'
import HsImage1 from '../HomeScreen/HsImage1'
class HomeSection3 extends Component {

     
    render() {
        
        return (
            <>
            
            <section className="home-section-3">
                <Container>
                    <div className="title">
                      <h2 className="text-center">Lorem ipsum dolor sit?</h2>
                      <p className="text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                    </div>
                  
                  <HsImage1/>
                    
                    
                  
                </Container>
              </section>

            </>
        );
    }
}

export default HomeSection3;
