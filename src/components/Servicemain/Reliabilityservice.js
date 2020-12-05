import React, { Component } from 'react';
import { Container,Image,Row,Col } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import card1 from '../../images/home-section-4-img-2.png'
import arrowleft from '../../images/footer-arrow.png'
class Reliabilityservices extends Component {

     
    render() {
        return (
            <>
            
            <section className="service-main-section-2">
                <Container>
                    <Row>
                        <Col xl={12}>
                            <div className="title">
                                <h2 className="text-left mb-0">Reliability Engineering Service</h2>
                            </div>
                        </Col>
                        <Col xl={6} lg={6} className="md-mb-4">
                            <div className="sub-services mb-30">
                                <p class="mb-3 font-16-line-height font-regular card-text">QLR offers hybrid Reliability Engineering services for managing asset conditions thereby complying to all HSEQ standards and increasing equipment availability. These practices leverage data-backed operational metrics combined with OEM recommendations.</p>
                            </div>
                            <div className="sub-services mb-30">
                                <p class="mb-3 font-16-line-height font-regular card-text">Explore our services below.</p>
                                <h2 className="font-25 font-bold color-333">Critical Spare Analysis</h2>
                                <p class="mb-3 font-16-line-height font-regular card-text">Through our asset reliability transformational consulting techniques, we enable our partners to make rapid, step-change improvements in operational performance. Critical Spare analysis to manage site spare stocks and minimise Working Capital.</p>
                            </div>
                            <div className="sub-services mb-30">
                                <h2 className="font-25 font-bold color-333">Root Cause Analysis (RCA)</h2>
                                <p class="mb-3 font-16-line-height font-regular card-text">By identifying the core reason for potential failure and to determine an effective strategy to eliminate the probability of such instances in the future.</p>
                            </div>
                            <div className="sub-services mb-30">
                                <h2 className="font-25 font-bold color-333">Life Data Analysis</h2>
                                <p class="mb-3 font-16-line-height font-regular card-text">Analysing the statistical distribution and life data from a representative sample to estimate important life characteristics of the equipment at a specific time. E.g.analysing mean life and the equipment failure rate.</p>
                            </div>
                            <div className="sub-services mb-30">
                                <h2 className="font-25 font-bold color-333">Failure Modes, Effects and Criticality Analysis (FMECA)</h2>
                                <p class="mb-3 font-16-line-height font-regular card-text">Identifying the failure modes that inturn affect operational efficiency, and preparation of a contingent strategy for the above.</p>
                            </div>
                            <div className="sub-services mb-30">
                                <h2 className="font-25 font-bold color-333">Reliability, Availability and Maintainability Analysis (RAM)</h2>
                                <p class="mb-3 font-16-line-height font-regular card-text">Strategies to improve Fixed and Mobile Plant Mechanical Availability, by performing ongoing system reliability checks and deploying robust maintenance plans.</p>
                            </div>
                        </Col>
                            
                        <Col xl={6} lg={6}>
                                <div className="side-sticky">
                                    <div className="main-blog-image mb-3">
                                        <Image src={card1} fluid/>
                                    </div>
                                </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            </>
        );
    }
}

export default Reliabilityservices;
