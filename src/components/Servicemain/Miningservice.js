import React, { Component } from 'react';
import { Container,Image,Row,Col } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import card1 from '../../images/service-side-1.png'
import arrowleft from '../../images/footer-arrow.png'
import line from '../../images/line.png'
import MiningScreen2 from '../ServiceMainScreen/MiningScreen2'
class Mining extends Component {

     
    render() {
        return (
            <>
            
            <section className="service-main-section-2">
                <Container>
                    <MiningScreen2/>
                </Container>
            </section>

            </>
        );
    }
}

export default Mining;
