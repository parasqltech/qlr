import React, { Component } from 'react';
import { Container,Image,Row,Col } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import card1 from '../../images/service-side-1.png'
import arrowleft from '../../images/footer-arrow.png'
class Digital extends Component {

     
    render() {
        return (
            <>
            
            <section className="service-main-section-2">
                <Container>
                    
                    <Row>
                        <Col xl={12}>
                            <div className="title">
                                <h2 className="text-left mb-0">Digital Transformation</h2>
                            </div>
                        </Col>
                        <Col xl={6} lg={6} className="md-mb-4">
                            <div className="sub-services mb-30">
                                <p class="mb-3 font-16-line-height font-regular card-text">QLR provides Mining Operations teams with the right tools that assists in achieving end to end visibility across all systems and processes.</p>
                                <p class="mb-3 font-16-line-height font-regular card-text">Empowered with these insights, assists leaders in making real-time decisions to ensure maximum output from all resources and assets.</p>
                                <p class="mb-3 font-16-line-height font-regular card-text">QLR specialises in automation,and assists in making Mining operations paperless, by providing custom built data capture applications.</p>          
                            </div>
                            <div className="sub-services mb-30">
                                <p class="mb-3 font-16-line-height font-regular card-text">Some of our main transformation objectives are:</p>
                                <h2 className="font-25 font-bold color-333">Collaborating Mine Planning, Asset Management, Mine Monitoring and Dispatch, SCADA Systems Data.</h2>
                                <p class="mb-3 font-16-line-height font-regular card-text">With end-to-end visualization capabilities across Planning and Operational data, users get a feedback loop of insights that assist in better real time decision making, for operational leaders and refining planning principles for planners and schedulers.</p>
                            </div>
                            <div className="sub-services mb-30">
                                <h2 className="font-25 font-bold color-333">Here a few benefits of collaborative data platforms:</h2>
                                <ul className="mb-0">
                                    <li class="font-16 font-regular ">
                                        <div class="d-flex">
                                            <div class="arrow-image mr-2">
                                                <Image src={arrowleft} fluid/>
                                            </div>
                                            <div class="arrow-data">
                                            Optimising Production Efficiency.
                                            </div>
                                        </div>
                                    </li>
                                    <li class="font-16 font-regular ">
                                        <div class="d-flex">
                                            <div class="arrow-image mr-2">
                                                <Image src={arrowleft} fluid/>
                                            </div>
                                            <div class="arrow-data">
                                            Increasing Operator Awareness.
                                            </div>
                                        </div>
                                    </li>
                                    <li class="font-16 font-regular ">
                                        <div class="d-flex">
                                            <div class="arrow-image mr-2">
                                                <Image src={arrowleft} fluid/>
                                            </div>
                                            <div class="arrow-data">
                                            Refining Planning guidelines, resulting in accurate budget planning.
                                            </div>
                                        </div>
                                    </li>   
                                </ul>
                            </div>
                            <div className="sub-services mb-30">
                                <h2 className="font-25 font-bold color-333">GIS: Data Visualisation</h2>
                                <p class="mb-3 font-16-line-height font-regular card-text">GIS has unique capabilities of location-based analytics to Mining operations. GIS enables gaining powerful insights using contextual tools to visualise and analyse a data set. GIS outputs sharing results via maps, apps, and dashboards.</p>
                            </div>
                            <div className="sub-services mb-30">
                                <h2 className="font-25 font-bold color-333">Here are the core features of GIS analytics:</h2>
                                <ul className="mb-0">
                                    <li class="font-16 font-regular ">
                                        <div class="d-flex">
                                            <div class="arrow-image mr-2">
                                                <Image src={arrowleft} fluid/>
                                            </div>
                                            <div class="arrow-data">
                                            Spatial and Location analytics.
                                            </div>
                                        </div>
                                    </li>
                                    <li class="font-16 font-regular ">
                                        <div class="d-flex">
                                            <div class="arrow-image mr-2">
                                                <Image src={arrowleft} fluid/>
                                            </div>
                                            <div class="arrow-data">
                                            Displaying information with audio visual aids on Pre Starts/Shift Starts.
                                            </div>
                                        </div>
                                    </li>   
                                </ul>
                            </div>
                            <div className="sub-services mb-30">
                                <h2 className="font-25 font-bold color-333">Automated App-based Inspections</h2>
                                <p class="mb-3 font-16-line-height font-regular card-text">QLR can setup and deploy automated inspections, checklists, work orders and forms, custom-tailored to your own mobile forms app. These inspection forms can be dispatched or assigned to multiple users.
                                The ongoing results of the inspections forms are uploaded to Business Intelligence Platforms, which assists in KPI tracking, and inbound compliance monitoring with the aid of machine learning algorithms in the input data set.
                                </p>
                            </div>
                            <div className="sub-services mb-30">
                                <h2 className="font-25 font-bold color-333">Some of the practical uses for these mobile forms:</h2>
                                <ul className="mb-0">
                                    <li class="font-16 font-regular ">
                                        <div class="d-flex">
                                            <div class="arrow-image mr-2">
                                                <Image src={arrowleft} fluid/>
                                            </div>
                                            <div class="arrow-data">
                                            Mobile and Fixed  Plant inspections
                                            </div>
                                        </div>
                                    </li>
                                    <li class="font-16 font-regular ">
                                        <div class="d-flex">
                                            <div class="arrow-image mr-2">
                                                <Image src={arrowleft} fluid/>
                                            </div>
                                            <div class="arrow-data">
                                            Workplace Inspections
                                            </div>
                                        </div>
                                    </li>
                                    <li class="font-16 font-regular ">
                                        <div class="d-flex">
                                            <div class="arrow-image mr-2">
                                                <Image src={arrowleft} fluid/>
                                            </div>
                                            <div class="arrow-data">
                                            Mine Quarry Managers Inspections
                                            </div>
                                        </div>
                                    </li>
                                    <li class="font-16 font-regular ">
                                        <div class="d-flex">
                                            <div class="arrow-image mr-2">
                                                <Image src={arrowleft} fluid/>
                                            </div>
                                            <div class="arrow-data">
                                            Underground Registered Mine Managers Inspections
                                            </div>
                                        </div>
                                    </li>
                                    <li class="font-16 font-regular ">
                                        <div class="d-flex">
                                            <div class="arrow-image mr-2">
                                                <Image src={arrowleft} fluid/>
                                            </div>
                                            <div class="arrow-data">
                                            Geotechnical Inspections
                                            </div>
                                        </div>
                                    </li>
                                    <li class="font-16 font-regular ">
                                        <div class="d-flex">
                                            <div class="arrow-image mr-2">
                                                <Image src={arrowleft} fluid/>
                                            </div>
                                            <div class="arrow-data">
                                            Foreman Inspections
                                            </div>
                                        </div>
                                    </li>
                                    <li class="font-16 font-regular ">
                                        <div class="d-flex">
                                            <div class="arrow-image mr-2">
                                                <Image src={arrowleft} fluid/>
                                            </div>
                                            <div class="arrow-data">
                                            In-field Risk Assessments
                                            </div>
                                        </div>
                                    </li>
                                    <li class="font-16 font-regular ">
                                        <div class="d-flex">
                                            <div class="arrow-image mr-2">
                                                <Image src={arrowleft} fluid/>
                                            </div>
                                            <div class="arrow-data">
                                            Incident Reporting
                                            </div>
                                        </div>
                                    </li>
                                    <li class="font-16 font-regular ">
                                        <div class="d-flex">
                                            <div class="arrow-image mr-2">
                                                <Image src={arrowleft} fluid/>
                                            </div>
                                            <div class="arrow-data">
                                            Work Orders
                                            </div>
                                        </div>
                                    </li>
                                    <li class="font-16 font-regular ">
                                        <div class="d-flex">
                                            <div class="arrow-image mr-2">
                                                <Image src={arrowleft} fluid/>
                                            </div>
                                            <div class="arrow-data">
                                            Compliance and Safety Checklists
                                            </div>
                                        </div>
                                    </li>
                                    <li class="font-16 font-regular ">
                                        <div class="d-flex">
                                            <div class="arrow-image mr-2">
                                                <Image src={arrowleft} fluid/>
                                            </div>
                                            <div class="arrow-data">
                                            Facilities Management
                                            </div>
                                        </div>
                                    </li>
                                    <li class="font-16 font-regular ">
                                        <div class="d-flex">
                                            <div class="arrow-image mr-2">
                                                <Image src={arrowleft} fluid/>
                                            </div>
                                            <div class="arrow-data">
                                            Time Tracking and Time Motion Data capture
                                            </div>
                                        </div>
                                    </li>
                                    <li class="font-16 font-regular ">
                                        <div class="d-flex">
                                            <div class="arrow-image mr-2">
                                                <Image src={arrowleft} fluid/>
                                            </div>
                                            <div class="arrow-data">
                                            Utilities Management
                                            </div>
                                        </div>
                                    </li>   
                                </ul>
                            </div>
                            <div className="sub-services mb-30">
                                <h2 className="font-25 font-bold color-333">Softwares Serviced:</h2>
                                <ul className="mb-0">
                                    <li class="font-16 font-regular ">
                                        <div class="d-flex">
                                            <div class="arrow-image mr-2">
                                                <Image src={arrowleft} fluid/>
                                            </div>
                                            <div class="arrow-data">
                                            R Studio
                                            </div>
                                        </div>
                                    </li>
                                    <li class="font-16 font-regular ">
                                        <div class="d-flex">
                                            <div class="arrow-image mr-2">
                                                <Image src={arrowleft} fluid/>
                                            </div>
                                            <div class="arrow-data">
                                            Microsoft Power BI
                                            </div>
                                        </div>
                                    </li>
                                    <li class="font-16 font-regular ">
                                        <div class="d-flex">
                                            <div class="arrow-image mr-2">
                                                <Image src={arrowleft} fluid/>
                                            </div>
                                            <div class="arrow-data">
                                            Zoho Analytics
                                            </div>
                                        </div>
                                    </li>
                                    <li class="font-16 font-regular ">
                                        <div class="d-flex">
                                            <div class="arrow-image mr-2">
                                                <Image src={arrowleft} fluid/>
                                            </div>
                                            <div class="arrow-data">
                                            Tableau 
                                            </div>
                                        </div>
                                    </li>
                                    <li class="font-16 font-regular ">
                                        <div class="d-flex">
                                            <div class="arrow-image mr-2">
                                                <Image src={arrowleft} fluid/>
                                            </div>
                                            <div class="arrow-data">
                                            Aveva Citect
                                            </div>
                                        </div>
                                    </li>
                                    <li class="font-16 font-regular ">
                                        <div class="d-flex">
                                            <div class="arrow-image mr-2">
                                                <Image src={arrowleft} fluid/>
                                            </div>
                                            <div class="arrow-data">
                                            Esri ArcGIS
                                            </div>
                                        </div>
                                    </li>
                                    <li class="font-16 font-regular ">
                                        <div class="d-flex">
                                            <div class="arrow-image mr-2">
                                                <Image src={arrowleft} fluid/>
                                            </div>
                                            <div class="arrow-data">
                                            QGIS
                                            </div>
                                        </div>
                                    </li>
                                    <li class="font-16 font-regular ">
                                        <div class="d-flex">
                                            <div class="arrow-image mr-2">
                                                <Image src={arrowleft} fluid/>
                                            </div>
                                            <div class="arrow-data">
                                            Mine Monitoring and Dispatch systems
                                            </div>
                                        </div>
                                    </li>   
                                </ul>
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

export default Digital;
