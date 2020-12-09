import React, { Component } from 'react';
import { Container,Image,Row,Col } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import card1 from '../../images/bgc-image.jpg'
import ProjectScreen2 from '../ProjectScreen/ProjectScreen2'
class ProjectSection2 extends Component {

     
    render() {
        return (
            <>
            
            <section className="project-section-2 service-main-section-2">
                <Container>
                    <ProjectScreen2/>
                </Container>
            </section>

            </>
        );
    }
}

export default ProjectSection2;
