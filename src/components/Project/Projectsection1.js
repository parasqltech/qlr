import React, { Component } from 'react';
import { Container,Breadcrumb } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
class ProjectSection1 extends Component {

     
    render() {
        
        return (
            <>
            <div className="main-padding-header">
                <section className="banner-section">
                    <Container>
                        <div className="text-white text-center">
                            <h2 className="font-40 font-uppercase font-bold mb-4 xs-mb-1">bgc</h2>
                        </div>
                    </Container>
                </section>
            </div>
            </>
        );
    }
}

export default ProjectSection1;
