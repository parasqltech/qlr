import React, { Component } from 'react';
import { Container,Breadcrumb } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import ClientScreen1 from '../ClientScreen/ClientScreen1'
class ClientSection1 extends Component {

     
    render() {
        
        return (
            <>
            <div className="main-padding-header">
                <section className="banner-section">
                    <Container>
                        <ClientScreen1/>
                    </Container>
                </section>
            </div>
            </>
        );
    }
}

export default ClientSection1;
