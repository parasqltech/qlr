import React, { Component } from 'react';
import { Container,Row,Col,Image,ListGroup } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import blog1 from '../../images/blog-detail-section-2-img.png'
class BlogDetailSection2 extends Component {

    render() {
        
        return (
            <>
            <section className="blog-details-section-2">
                <Container>
                    <Row>
                        <Col xl={8} lg={7}>
                            <div className="blog-details-section-2">
                                <div class="title">
                                    <h2 className="title-h2 font-bold mb-0">2 Comments</h2>
                                </div>
                                
                                <div className="main-blog-details">
                                    <ListGroup as="ul" className="">
                                        <ListGroup.Item as="li">
                                            <div className="main-blog-image">
                                                <Image src={blog1} fluid/>
                                            </div>
                                            <div className="main-blog-data">
                                                <div className="d-md-block d-none">
                                                    <div className="d-flex justify-content-between mb-2 align-items-center">
                                                        <p className="font-16 font-bold mb-0">Lorem ipsum</p>
                                                        <p className="font-16 font-regular mb-0">15 January 2019 At 10:30 pm</p>
                                                        <button className="btn blue font-15 font-regular">Reply</button>
                                                    </div>
                                                </div>
                                                <div className="d-block d-md-none">
                                                    <div className="d-flex justify-content-between mb-2 align-items-center">
                                                        <p className="font-16 font-bold mb-0">Lorem ipsum</p>
                                                        <button className="btn blue font-15 font-regular">Reply</button>
                                                    </div>
                                                </div>
                                                <p className="d-block d-md-none font-16 font-regular mb-1">15 January 2019 At 10:30 pm</p>
                                                <p className="font-16 font-regular mb-0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            <div className="main-blog-image">
                                                <Image src={blog1} fluid/>
                                            </div>
                                            <div className="main-blog-data">
                                                <div className="d-md-block d-none">
                                                    <div className="d-flex justify-content-between mb-2 align-items-center">
                                                        <p className="font-16 font-bold mb-0">Lorem ipsum</p>
                                                        <p className="font-16 font-regular mb-0">15 January 2019 At 10:30 pm</p>
                                                        <button className="btn blue font-15 font-regular">Reply</button>
                                                    </div>
                                                </div>
                                                <div className="d-block d-md-none">
                                                    <div className="d-flex justify-content-between mb-2 align-items-center">
                                                        <p className="font-16 font-bold mb-0">Lorem ipsum</p>
                                                        <button className="btn blue font-15 font-regular">Reply</button>
                                                    </div>
                                                </div>
                                                <p className="d-block d-md-none font-16 font-regular mb-1">15 January 2019 At 10:30 pm</p>
                                                <p className="font-16 font-regular mb-0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            <div className="main-blog-image">
                                                <Image src={blog1} fluid/>
                                            </div>
                                            <div className="main-blog-data">
                                                <div className="d-md-block d-none">
                                                    <div className="d-flex justify-content-between mb-2 align-items-center">
                                                        <p className="font-16 font-bold mb-0">Lorem ipsum</p>
                                                        <p className="font-16 font-regular mb-0">15 January 2019 At 10:30 pm</p>
                                                        <button className="btn blue font-15 font-regular">Reply</button>
                                                    </div>
                                                </div>
                                                <div className="d-block d-md-none">
                                                    <div className="d-flex justify-content-between mb-2 align-items-center">
                                                        <p className="font-16 font-bold mb-0">Lorem ipsum</p>
                                                        <button className="btn blue font-15 font-regular">Reply</button>
                                                    </div>
                                                </div>
                                                <p className="d-block d-md-none font-16 font-regular mb-1">15 January 2019 At 10:30 pm</p>
                                                <p className="font-16 font-regular mb-0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                                            </div>
                                        </ListGroup.Item>
                                    </ListGroup>
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

export default BlogDetailSection2;
