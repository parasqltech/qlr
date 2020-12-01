import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import ServicesScreen2 from '../ServicesScreen/ServicesScreen2'
class Servicesection2 extends Component {

     
    render() {
        return (
            <>
            
            
            <section className="service-section-2">
                <Container>
                   <ServicesScreen2/> 
                </Container>
            </section>

            </>
        );
    }
}

export default Servicesection2;
