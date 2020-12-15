import React, { Component } from 'react';
import { Container,Image } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import Banner from '../../images/banner-1-3.jpg'
class HomeSection8 extends Component {
     
    render() {
        
        return (
            <>

            <section className="home-section-8 p-0">
                <Image src={Banner} className="img-fluid"/>
            </section>
            </>
        );
    }
}

export default HomeSection8;
