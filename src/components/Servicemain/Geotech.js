import React, { Component } from 'react';
import { Container,Image } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import card1 from '../../images/blog-section-2-card-1.png'
import arrowleft from '../../images/footer-arrow.png'
class Geotech extends Component {

     
    render() {
        return (
            <>
            
            <section className="service-main-section-2">
                <Container>
                    <div className="title">
                        <h2 className="text-left mb-0">Geotech & Hydrogeology Services</h2>
                    </div>
                    <div className="sub-services mb-30">
                        <p class="mb-3 font-16-line-height font-regular card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        
                        <div className="main-blog-image mb-3">
                            <Image src={card1} fluid/>
                        </div>
                    </div>
                    <div className="sub-services mb-30">
                        <h2 className="font-25 font-bold color-333">Our approach to modelling</h2>
                        <p class="mb-3 font-16-line-height font-regular card-text">Integrating groundwater pressures into slope stability modelling is an evolving process in mine design.
                            Our goal is to carefully match the slope modelling requirements with a proposed dewatering plan.</p>
                        <p class="mb-3 font-16-line-height font-regular card-text">We use modelling methods that are adapted to the amount of available data, but flexible enough to be
                        adapted as new information and data become available. We use the most advanced commercial
                        modelling software available, which allows us to provide3D pore pressure distributions, in both static
                        or transient conditions, that match the slope geology. We construct our models primarily using
                        unstructured grids, which provides flexibility in the model design. With unstructured grids, the geology
                        and geometry in our models can be represented and modelled in more detail and translated back
                        more accurately to slope modellings such as Slide2D/3D or RS
                        2D/3D to ensure geotechnical and
                        hydrogeological domains match each other.</p>
                        <p class="mb-3 font-16-line-height font-regular card-text">The key focus of our specialists is to understand where the groundwater and geomechanical models
                        need to interact most accurately and what portions of pit slopes are most sensitive to pore pressures,
                        (this will change with time due to natural or induced depressurisation). We use the Null Space Monte
                        Carlo approach to quantify risks related to the project and pit and quantify data uncertainties and
                        resulting limitations of the model. Our approach to uncertainty analysis is designed to access whether
                        acceptable depressurisation rates can be achieved to produce stable slopes or identify the need for
                        more proactive measures, such as enhanced drain installation programmes and more.</p>
                    </div>
                    <div className="sub-services mb-30">
                        <h2 className="font-25 font-bold color-333">Conceptual Modelling</h2>
                        <p class="mb-3 font-16-line-height font-regular card-text">Our team has a strong understanding of the need for models to be designed to answer specific
                        questions and is exceptionally skilled at developing conceptual models as the underlying basis for
                        problem-solving, long before implementation modelling software. We build instructive 3D geological
                        and hydrostratigraphic models to communicate complex hydrogeological project settings to
                        stakeholders (clients, regulators and the community) and to facilitate numerical model development
                        using the state-of-the-art software package, Leapfrog Hydro.</p>
                    </div>
                    <div className="sub-services mb-30">
                        <h2 className="font-25 font-bold color-333">QL Resources Key Staff</h2>
                        <p class="mb-3 font-16-line-height font-regular card-text">Our groundwater team has substantial experience and a breadth of capability in groundwater
                        resource assessment and management. The staff is well versed in a wide variety of groundwater flow
                        model codes, including MODFLOW, FEFLOW and MINEDW.</p>
                    </div>
                    <div className="sub-services mb-30">
                        <h2 className="font-25 font-bold color-333">Geotechnical Engineering Services</h2>
                        <p class="mb-3 font-16-line-height font-regular card-text">Core services include:</p>
                        <ul className="mb-0">
                            <li class="font-16 font-regular ">
                                <div class="d-flex">
                                    <div class="arrow-image mr-2">
                                        <Image src={arrowleft} fluid/>
                                    </div>
                                    <div class="arrow-data">
                                    Operational Geotechnical support
                                    </div>
                                </div>
                                <ul>
                                    <li class="font-16 font-regular ">
                                        <div class="d-flex">
                                            <div class="arrow-image mr-2">
                                                <Image src={arrowleft} fluid/>
                                            </div>
                                            <div class="arrow-data">
                                            Pit slope and dump inspections
                                            </div>
                                        </div>
                                    </li>
                                    <li class="font-16 font-regular ">
                                        <div class="d-flex">
                                            <div class="arrow-image mr-2">
                                                <Image src={arrowleft} fluid/>
                                            </div>
                                            <div class="arrow-data">
                                            Geotechnical Hazard Identification
                                            </div>
                                        </div>
                                    </li>
                                    <li class="font-16 font-regular ">
                                        <div class="d-flex">
                                            <div class="arrow-image mr-2">
                                                <Image src={arrowleft} fluid/>
                                            </div>
                                            <div class="arrow-data">
                                            Pre &amp; post-blast inspections, hazard and mitigation measures
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
                                    Slope monitoring installation and data analysis
                                    </div>
                                </div>
                                <ul>
                                    <li class="font-16 font-regular ">
                                        <div class="d-flex">
                                            <div class="arrow-image mr-2">
                                                <Image src={arrowleft} fluid/>
                                            </div>
                                            <div class="arrow-data">
                                                Prism or Automated total station and Radars
                                                
                                            </div>
                                        </div>
                                    </li>
                                    <li class="font-16 font-regular ">
                                        <div class="d-flex">
                                            <div class="arrow-image mr-2">
                                                <Image src={arrowleft} fluid/>
                                            </div>
                                            <div class="arrow-data">
                                                Blast vibration monitoring associated with critical slopes or heritage sites
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="sub-services mb-30">
                        
                        <ul className="mb-0">
                            <li class="font-16 font-regular ">
                                <div class="d-flex">
                                    <div class="arrow-image mr-2">
                                        <Image src={arrowleft} fluid/>
                                    </div>
                                    <div class="arrow-data">
                                    Geotechnical hazard awareness training
                                    </div>
                                </div>
                            </li>   
                            <li class="font-16 font-regular ">
                                <div class="d-flex">
                                    <div class="arrow-image mr-2">
                                        <Image src={arrowleft} fluid/>
                                    </div>
                                    <div class="arrow-data">
                                    Slope reconciliation (As-built versus Design)
                                    </div>
                                </div>
                            </li>   
                            <li class="font-16 font-regular ">
                                <div class="d-flex">
                                    <div class="arrow-image mr-2">
                                        <Image src={arrowleft} fluid/>
                                    </div>
                                    <div class="arrow-data">
                                    Development of Ground Control Management Plan
                                    </div>
                                </div>
                            </li>   
                            <li class="font-16 font-regular ">
                                <div class="d-flex">
                                    <div class="arrow-image mr-2">
                                        <Image src={arrowleft} fluid/>
                                    </div>
                                    <div class="arrow-data">
                                    Development of Geotechnical TARPs
                                    </div>
                                </div>
                            </li>   
                            <li class="font-16 font-regular ">
                                <div class="d-flex">
                                    <div class="arrow-image mr-2">
                                        <Image src={arrowleft} fluid/>
                                    </div>
                                    <div class="arrow-data">
                                    Pit mapping for slope reconciliation
                                    </div>
                                </div>
                            </li>   
                            <li class="font-16 font-regular ">
                                <div class="d-flex">
                                    <div class="arrow-image mr-2">
                                        <Image src={arrowleft} fluid/>
                                    </div>
                                    <div class="arrow-data">
                                    Core logging and Data Analysis
                                    </div>
                                </div>
                            </li>
                            <li class="font-16 font-regular ">
                                <div class="d-flex">
                                    <div class="arrow-image mr-2">
                                        <Image src={arrowleft} fluid/>
                                    </div>
                                    <div class="arrow-data">
                                    Core logging and Data Analysis
                                    </div>
                                </div>
                            </li>
                            <li class="font-16 font-regular ">
                                <div class="d-flex">
                                    <div class="arrow-image mr-2">
                                        <Image src={arrowleft} fluid/>
                                    </div>
                                    <div class="arrow-data">
                                    Slope Stability Analysis and parameter analysis
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

export default Geotech;
