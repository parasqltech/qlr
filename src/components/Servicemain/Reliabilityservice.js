import React, { Component } from 'react';
import { Container,Image,Row,Col } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import card1 from '../../images/service-side-1.png'
import arrowleft from '../../images/footer-arrow.png'
import ReliabilityScreen2 from '../ServiceMainScreen/ReliabilityScreen2'
class Reliabilityservices extends Component {

     
    render() {
        return (
            <>
            
            <section className="service-main-section-2">
                <Container>
                    <Row>
                        <ReliabilityScreen2/>
                    </Row>
                </Container>
            </section>

            </>
        );
    }
}

export default Reliabilityservices;
