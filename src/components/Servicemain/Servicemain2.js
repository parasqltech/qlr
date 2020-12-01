import React, { Component } from 'react';
import { Container,Image } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import card1 from '../../images/blog-section-2-card-3.png'
import arrowleft from '../../images/footer-arrow.png'
class Servicesection1 extends Component {

     
    render() {
        return (
            <>
            
            <section className="service-main-section-2">
                <Container>
                    <div className="title">
                        <h2 className="text-left mb-0">Service title</h2>
                    </div>
                    <p class="mb-3 font-16-line-height font-regular card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur</p>
                    <p class="mb-3 font-16-line-height font-regular card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                    <p class="mb-3 font-16-line-height font-regular card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
                    
                    <div className="main-blog-image mb-3">
                        <Image src={card1} fluid/>
                    </div>
                    <p class="mb-3 font-16-line-height font-regular card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
                    <p class="mb-3 font-16-line-height font-regular card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur</p>

                    <ul>
                        
                    <li class="font-16 font-regular ">
                            <div class="d-flex">
                                <div class="arrow-image mr-2">
                                    <Image src={arrowleft} fluid/>
                                </div>
                                <div class="arrow-data">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                </div>
                            </div>
                        </li>
                        <li class="font-16 font-regular ">
                            <div class="d-flex">
                                <div class="arrow-image mr-2">
                                    <Image src={arrowleft} fluid/>
                                </div>
                                <div class="arrow-data">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                </div>
                            </div>
                        </li>
                        <li class="font-16 font-regular ">
                            <div class="d-flex">
                                <div class="arrow-image mr-2">
                                    <Image src={arrowleft} fluid/>
                                </div>
                                <div class="arrow-data">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                </div>
                            </div>
                        </li>
                        <li class="font-16 font-regular ">
                            <div class="d-flex">
                                <div class="arrow-image mr-2">
                                    <Image src={arrowleft} fluid/>
                                </div>
                                <div class="arrow-data">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                </div>
                            </div>
                        </li>
                    </ul>

                </Container>
            </section>

            </>
        );
    }
}

export default Servicesection1;
