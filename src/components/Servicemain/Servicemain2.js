import React, { Component } from 'react';
import { Container,Image } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import card1 from '../../images/our-blog-2.png'
import arrowleft from '../../images/footer-arrow.png'
class Servicesection1 extends Component {

     
    render() {
        return (
            <>
            
            <section className="service-main-section-2">
                <Container>
                    <div className="title">
                        <h2 className="text-left mb-0">Mining Engineering</h2>
                    </div>
                    <div className="sub-services mb-30">
                        <p class="mb-3 font-16-line-height font-regular card-text">QLR provides diverse engineering & consulting in Mining Technical Services. Our team of engineers expertise in all aspects of Open Pit And Underground Mining to help our partners gain the most out of the resource, improve asset efficiency, and minimise costs.</p>
                        
                        <div className="main-blog-image mb-3">
                            <Image src={card1} fluid/>
                        </div>
                    </div>
                    <div className="sub-services mb-30">
                        <h2 className="font-25 font-bold color-333">Mining Engineering and Technical services</h2>
                        <p class="mb-3 font-16-line-height font-regular card-text">Here are some of our core engineering services outlined:</p>
                        <p class="mb-3 font-16-line-height font-regular card-text">Our team of Mining engineers assist in supporting technical services teams in short, medium and long term phases of Mine Planning.</p>
                    </div>
                    <div className="sub-services mb-30">
                        <h2 className="font-25 font-bold color-333">Short Term</h2>
                        <ul className="mb-0">
                            <li class="font-16 font-regular ">
                                <div class="d-flex">
                                    <div class="arrow-image mr-2">
                                        <Image src={arrowleft} fluid/>
                                    </div>
                                    <div class="arrow-data">
                                    Open Pit Drill and blast optimisation- Vibration Monitoring optimisations, fragmentation analysis, accurate fly rock predictions.
                                    </div>
                                </div>
                            </li>   
                            <li class="font-16 font-regular ">
                                <div class="d-flex">
                                    <div class="arrow-image mr-2">
                                        <Image src={arrowleft} fluid/>
                                    </div>
                                    <div class="arrow-data">
                                    Open Pit Load and Haul
                                    </div>
                                </div>
                                <ul>
                                    <li class="font-16 font-regular ">
                                        <div class="d-flex">
                                            <div class="arrow-image mr-2">
                                                <Image src={arrowleft} fluid/>
                                            </div>
                                            <div class="arrow-data">
                                            Trucking Calculators simplified, to give operational supervisors insights into day to day operations. Strategies to optimise Ancillary fleet’s KPI’s and time minimise operating hours. 
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li class="font-16 font-regular ">
                                <div class="d-flex">
                                    <div class="arrow-image mr-2">
                                        <Image src={arrowleft} fluid/>
                                    </div>
                                    <div class="arrow-data">
                                    Supply Chain Optimisation:
                                    </div>
                                </div>
                                <ul>
                                    <li class="font-16 font-regular ">
                                        <div class="d-flex">
                                            <div class="arrow-image mr-2">
                                                <Image src={arrowleft} fluid/>
                                            </div>
                                            <div class="arrow-data">
                                                Pit to Port  Optimisations. Stockpile predictions to smoothen supply chain requirements.
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="sub-services mb-30">
                        <h2 className="font-25 font-bold color-333">Medium and Long Term Planning.</h2>
                        <ul className="mb-0">
                            <li class="font-16 font-regular ">
                                <div class="d-flex">
                                    <div class="arrow-image mr-2">
                                        <Image src={arrowleft} fluid/>
                                    </div>
                                    <div class="arrow-data">
                                    Stockpile Blending Scenarios
                                    </div>
                                </div>
                            </li>   
                            <li class="font-16 font-regular ">
                                <div class="d-flex">
                                    <div class="arrow-image mr-2">
                                        <Image src={arrowleft} fluid/>
                                    </div>
                                    <div class="arrow-data">
                                    Grade Fluctuation management and risk mitigation strategies.
                                    </div>
                                </div>
                            </li>   
                            <li class="font-16 font-regular ">
                                <div class="d-flex">
                                    <div class="arrow-image mr-2">
                                        <Image src={arrowleft} fluid/>
                                    </div>
                                    <div class="arrow-data">
                                    Equipment Selection Strategies.
                                    </div>
                                </div>
                            </li>   
                            <li class="font-16 font-regular ">
                                <div class="d-flex">
                                    <div class="arrow-image mr-2">
                                        <Image src={arrowleft} fluid/>
                                    </div>
                                    <div class="arrow-data">
                                    Budget Optimisations.
                                    </div>
                                </div>
                            </li>   
                            <li class="font-16 font-regular ">
                                <div class="d-flex">
                                    <div class="arrow-image mr-2">
                                        <Image src={arrowleft} fluid/>
                                    </div>
                                    <div class="arrow-data">
                                    Pit Optimisations.
                                    </div>
                                </div>
                            </li>   
                            <li class="font-16 font-regular ">
                                <div class="d-flex">
                                    <div class="arrow-image mr-2">
                                        <Image src={arrowleft} fluid/>
                                    </div>
                                    <div class="arrow-data">
                                    Life of Mine Planning.
                                    </div>
                                </div>
                            </li>   
                        </ul>
                    </div>
                    <div className="sub-services mb-30">
                        <h2 className="font-25 font-bold color-333">Management Plans</h2>
                        <ul className="mb-0">
                            <li class="font-16 font-regular ">
                                <div class="d-flex">
                                    <div class="arrow-image mr-2">
                                        <Image src={arrowleft} fluid/>
                                    </div>
                                    <div class="arrow-data">
                                    Development of Management plans essential for deployment of Mining Operations from Feasibility to Operations stage.
                                    </div>
                                </div>
                            </li>   
                        </ul>
                    </div>

                </Container>
            </section>

            </>
        );
    }
}

export default Servicesection1;
