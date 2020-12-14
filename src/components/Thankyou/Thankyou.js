import React, { Component } from 'react';
import { Container,Image } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import card1 from '../../images/blog-section-2-card-1.png'
import arrowleft from '../../images/footer-arrow.png'
class Thankyou extends Component {

     
    render() {
        return (
            <>
             <div className="main-padding-header">
                <section className="banner-section">
                    <Container>
                    <div className="text-white text-center">
                        <h2 className="font-40 font-uppercase font-bold mb-4 xs-mb-1">Thankyou</h2>
                    </div>
                </Container>
                </section>
                <section className="contact-section-2">
                <Container>
                    <div className="title">
                        <h2 className="text-center mb-0">Thankyou for Submiting the Form.</h2>
                    </div>
                </Container>
                </section>
            </div>

            </>
        );
    }
}

export default Thankyou;
