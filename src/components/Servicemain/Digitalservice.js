import React, { Component } from 'react';
import { Container,Image,Row,Col } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import card1 from '../../images/service-side-1.png'
import arrowleft from '../../images/footer-arrow.png'
import DigitalScreen2 from '../ServiceMainScreen/DigitalScreen2'
class Digital extends Component {

     
    render() {
        return (
            <>
            
            <section className="service-main-section-2">
                <Container>
                    <Row>
                        <DigitalScreen2/>
                    </Row>
                   </Container>
            </section>

            </>
        );
    }
}

export default Digital;
