import React, { Component } from 'react';
import { Container,Breadcrumb } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import ServicesScreen1 from '../ServicesScreen/ServicesScreen1'
import ReliabilityScreen1 from '../ServiceMainScreen/ReliabilityScreen1'
class Reliabilitymain1 extends Component {

     
    render() {
        return (
            <>
            
            <div className="main-padding-header">
                <section className="banner-section">
                    <Container>
                        <ReliabilityScreen1/>
                    </Container>
                </section>
            </div>

            </>
        );
    }
}

export default Reliabilitymain1;
