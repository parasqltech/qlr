import React, { Component } from 'react';
import { Container,Image,Row,Col } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import card1 from '../../images/Vango.jpg'
class ProjectSection2 extends Component {

     
    render() {
        return (
            <>
            
            <section className="project-section-2 service-main-section-2">
                <Container>
                    <p>Vango Mining Limited is an ASX-listed junior mineral resources company focused on the exploration and development of its 100%-owned Marymia Gold Project in the midwest region of Western Australia</p>
            
                    <Image src={card1} fluid className="mb-3" />

                    <p>Vango Mining being a Brownfield project required the implementation of the Proof of Concept – Document Management System (DMS). This standard would ensure that all business units apply a common framework for data extraction, storage, processing, reporting & analytics and governance, with utmost importance to be given to data security.</p>
                    <p>With the help of our CRM consulting & development services, we proposed a unified platform for data inputs and outputs for comparative analysis of site performance and improved transparency in all (physicals) data reporting. </p>
                    <p>The proposed Microsoft 365 CRM platform would include business rules for what data is captured and how the acquired data would be measured against the budget. Not only that the CRM will segment all the key performance indicators to be utilised.</p>
                    <p>The project is still underway and we will keep you posted on its progress.</p>
                </Container>
            </section>

            </>
        );
    }
}

export default ProjectSection2;
