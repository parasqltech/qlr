import React, { Component } from 'react';
import { Container,Image,Row,Col } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import logo from '../../images/thank-you.png'
class Thankyou extends Component {

     
    render() {
        return (
            <>
             {/* <div className="main-padding-header">
                <section className="banner-section">
                    <Container>
                    <div className="text-white text-center">
                        <h2 className="font-40 font-uppercase font-bold mb-4 xs-mb-1">Thank you</h2>
                    </div>
                </Container>
                </section>
            </div> */}
            <section className="thankyou-section-2 justify-content-center text-center">
                <Container>
                  
                    <Image src={logo} className="mb-4" fluid />
                
                    <div className="title mb-0">
                        <h2 className="text-center mb-0">Thank You</h2>
                        <p className="text-center mb-0">for reaching out to us</p>
                    </div>
                    
                </Container>
            </section>

            </>
        );
    }
}

export default Thankyou;
