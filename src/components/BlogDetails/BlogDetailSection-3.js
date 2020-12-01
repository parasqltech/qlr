import React, { Component } from 'react';
import { Container,Row,Col,Form,FormControl,Image,Button,Pagination } from 'react-bootstrap';
import { FaAngleRight } from 'react-icons/fa'
import { Link, StaticQuery, graphql } from 'gatsby'
class BlogDetailSection3 extends Component {

    render() {
        
        return (
            <>
            <section className="blog-details-section-3 contact-section-3">
                <Container>
                    <div className="blog-details-section-3-data">
                        <div class="title">
                            <h2 className="title-h2 mb-0">Lorem ipsum dolor sit?</h2>
                        </div>
                        <Form>
                            <Row>
                                <Col xl={8}>
                                    <Row className="mt-4">
                                        <Col xl={6} lg={6} md={12}>
                                            <Form.Group controlId="formBasicEmail">
                                                    <Form.Control type="rext" placeholder="First Name" className="main font-18 font-regular color-666"/>
                                                    <Form.Text className="text-muted d-none">
                                                        Error Massage
                                                    </Form.Text>
                                            </Form.Group>
                                        </Col>
                                        <Col xl={6} lg={6} md={12}>
                                            <Form.Group controlId="">
                                                <FormControl placeholder="Last Name" className="main font-18 font-regular color-666"/>
                                                <Form.Text className="text-muted d-none">
                                                    Error Massage
                                                </Form.Text>
                                            </Form.Group>
                                        </Col>
                                        <Col  xl={12} lg={12} md={12}>
                                            <Form.Group controlId="">
                                                <FormControl placeholder="Email" className="main font-18 font-regular color-666"/>
                                                <Form.Text className="text-muted d-none">
                                                    Error Massage
                                                </Form.Text>
                                            </Form.Group>
                                        </Col>
                                        <Col xl={12} lg={12} md={12}>
                                            <Form.Group controlId="">
                                                <FormControl placeholder="Subject" className="main font-18 font-regular color-666"/>
                                                <Form.Text className="text-muted d-none">
                                                    Error Massage
                                                </Form.Text>
                                            </Form.Group>
                                        </Col>
                                        <Col xl={12} lg={12} md={12}>
                                            <Form.Group controlId="">
                                            <Form.Control as="textarea" rows="5" placeholder="Your Message" />
                                            </Form.Group>
                                        </Col>
                                        {/* <Col xl={12} lg={12} md={12} className="justify-content-center d-flex">
                                            <Button variant="" type="submit" className="blue d-flex alignn-items-center">
                                                Send <FaAngleRight className="ml-1"/>
                                            </Button>
                                        </Col> */}
                                        <Col xl={12} lg={12} md={12} className="justify-content-center d-flex">
                                            <Pagination className="justify-content-center lg-mb-4">
                                                <Pagination.Prev className="prev" />
                                                <Pagination.Item active>{1}</Pagination.Item>
                                                <Pagination.Next className="next"/>
                                            </Pagination>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Form>
                    </div>

                </Container>
            </section>
            </>
        );
    }
}

export default BlogDetailSection3;
