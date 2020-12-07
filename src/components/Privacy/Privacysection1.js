import React, { Component } from 'react';
import { Container,Breadcrumb } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import ContactScreen1 from '../ContactScreen/ContactScreen1'
class Privacysection1 extends Component {

     
    render() {
        
        return (
            <>
            <div className="main-padding-header">
                <section className="banner-section">
                    <Container>
                        <div className="text-white text-center">
                            <div className="text-white text-center">
                                <h2 className="font-40 font-uppercase font-bold mb-4 xs-mb-1">Privacy Statement</h2>
                            </div>
                        </div>
                    </Container>
                </section>
            </div>
            </>
        );
    }
}

export default Privacysection1;
