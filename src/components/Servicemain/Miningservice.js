import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
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
