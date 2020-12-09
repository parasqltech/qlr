import React, { Component } from 'react';
import { Container,Breadcrumb } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import ProjectScreen1 from '../ProjectScreen/ProjectScreen1'
class ProjectSection1 extends Component {

     
    render() {
        
        return (
            <>
            <div className="main-padding-header">
                <section className="banner-section">
                    <Container>
                        <ProjectScreen1/>
                    </Container>
                </section>
            </div>
            </>
        );
    }
}

export default ProjectSection1;
