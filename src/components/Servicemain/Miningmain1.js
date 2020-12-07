import React, { Component } from 'react';
import { Container,Breadcrumb } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import ServicesScreen1 from '../ServicesScreen/ServicesScreen1'
import MiningScreen1 from '../ServiceMainScreen/MiningScreen1'
class Miningmain1 extends Component {

     
    render() {
        return (
            <>
            
            <div className="main-padding-header">
                <section className="banner-section">
                    <Container>
                        <MiningScreen1/>
                    </Container>
                </section>
            </div>

            </>
        );
    }
}

export default Miningmain1;
