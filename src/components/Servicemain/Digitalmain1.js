import React, { Component } from 'react';
import { Container,Breadcrumb } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import ServicesScreen1 from '../ServicesScreen/ServicesScreen1'
import DigitalScreen1 from '../ServiceMainScreen/DigitalScreen1'
class Digitalmain1 extends Component {

     
    render() {
        return (
            <>
            
            <div className="main-padding-header">
                <section className="banner-section">
                    <Container>
                        <DigitalScreen1/>
                    </Container>
                </section>
            </div>

            </>
        );
    }
}

export default Digitalmain1;
