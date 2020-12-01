import React, { Component } from 'react';
import { Container,Breadcrumb } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import BlogScreen1 from '../BlogScreen/BlogScreen1'
class Blogsection1 extends Component {

     
    render() {
        
        return (
            <>
            <div className="main-padding-header">
                <section className="banner-section">
                    <Container>
                        <BlogScreen1/>
                    </Container>
                </section>
            </div>
            </>
        );
    }
}

export default Blogsection1;
