import React, { Component } from 'react';
import { Container,Row,Col,Media,Image } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import map from '../../images/blue-map.png'
import call from '../../images/blue-call.png'
import mail from '../../images/blue-mail.png'
import iframe from '../../images/ifame.png'
import Iframe from 'react-iframe'
import ContactScreen2 from '../ContactScreen/ContactScreen2'
class Contactsection2 extends Component {

     
    render() {
        return (
            <>
            
            <section className="contact-section-2">
                <Container>
                    <ContactScreen2/>
                   <Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3385.1889096226905!2d115.859075!3d-31.9557714!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bb29e26a22b5%3A0x4237fca06c578d13!2s45%20St%20Georges%20Terrace%2C%20Perth%20WA%206000%2C%20Australia!5e0!3m2!1sen!2sin!4v1598633772764!5m2!1sen!2sin"
                        width="100%"
                        height="500px"
                        className="map-iframe"
                        position="relative"
                        frameBorder="0" 
                        allowFullScreen/>
                </Container>
            </section>

            </>
        );
    }
}

export default Contactsection2;
