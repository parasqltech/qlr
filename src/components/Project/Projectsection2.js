import React, { Component } from 'react';
import { Container,Image,Row,Col } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import card1 from '../../images/bgc-image.jpg'

class ProjectSection2 extends Component {

     
    render() {
        return (
            <>
            
            <section className="project-section-2 service-main-section-2">
                <Container>
                    <p>BGC today is a diverse business. It is a vertically integrated business model across construction, contracting and manufacturing offers economies of a scale.</p>
                    <Image src={card1} fluid className="mb-3" />
                    <p>BGC’s major challenge is its reporting process is executed manually which is quite tedious in today’s market trend. Accurate reporting is mandatory as their business is in contracting division. BGC requires to completely establish an automated reporting system.</p>
                    <p>We have proposed a ZOHO CRM platform which will enable them to get rid of bulky excel report sheets. Our strategy is to extract all the data from excel sheets and transfer them to ZOHO with the help of the ETL process. </p>
                    <p>Our aim is to provide BGC with automated analytics & reporting dashboard that will provide operational efficiency.</p>
                    <p>However, this project is in its early stage of development. As it proceeds further, we will keep updating you.</p>

                </Container>
            </section>

            </>
        );
    }
}

export default ProjectSection2;
