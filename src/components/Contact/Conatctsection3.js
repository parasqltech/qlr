import React, { Component } from 'react';
import { Container,Row,Col,Form,InputGroup,FormControl,Image,Button } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaAngleRight } from 'react-icons/fa'
import formname from '../../images/form-name.png'
import formcall from '../../images/form-call.png'
import formmail from '../../images/form-mail.png'

class Contactsection3 extends Component {

     
    render() {
        return (
            <>
            
            <section className="contact-section-3">
                <Container>
                    <div className="title">
                        <h2 className="text-center">Lorem ipsum dolor sit?</h2>
                        <p className="text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                    </div>
                    <Form>
                        <Row className="mt-4">
                            <Col xl={6} lg={6} md={12}>
                                <Form.Group controlId="">
                                    <InputGroup className="mb-0">
                                        <FormControl placeholder="First Name" className="main font-18 font-regular color-666"/>
                                        <InputGroup.Append>
                                        <InputGroup.Text id=""><Image src={formname} fluid/></InputGroup.Text>
                                        </InputGroup.Append>
                                    </InputGroup>
                                    <Form.Text className="text-muted d-none">
                                        Error Massage
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col xl={6} lg={6} md={12}>
                                <Form.Group controlId="">
                                    <InputGroup className="mb-0">
                                        <FormControl placeholder="Last Name" className="main font-18 font-regular color-666"/>
                                        <InputGroup.Append>
                                        <InputGroup.Text id=""><Image src={formname} fluid/></InputGroup.Text>
                                        </InputGroup.Append>
                                    </InputGroup>
                                    <Form.Text className="text-muted d-none">
                                        Error Massage
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col xl={6} lg={6} md={12}>
                                <Form.Group controlId="">
                                    <InputGroup className="mb-0">
                                        <FormControl placeholder="Mobile Number" className="main font-18 font-regular color-666"/>
                                        <InputGroup.Append>
                                        <InputGroup.Text id=""><Image src={formcall} fluid/></InputGroup.Text>
                                        </InputGroup.Append>
                                    </InputGroup>
                                    <Form.Text className="text-muted d-none">
                                        Error Massage
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col xl={6} lg={6} md={12}>
                                <Form.Group controlId="">
                                    <InputGroup className="mb-0">
                                        <FormControl placeholder="Email" className="main font-18 font-regular color-666"/>
                                        <InputGroup.Append>
                                        <InputGroup.Text id=""><Image src={formmail} fluid/></InputGroup.Text>
                                        </InputGroup.Append>
                                    </InputGroup>
                                    <Form.Text className="text-muted d-none">
                                        Error Massage
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col xl={12} lg={12} md={12}>
                                <Form.Group controlId="">
                                <Form.Control as="textarea" rows="5" placeholder="Message" />
                                </Form.Group>
                            </Col>
                            <Col xl={12} lg={12} md={12} className="justify-content-center d-flex">
                                <Button variant="" type="submit" className="blue font-semibold d-flex alignn-items-center">
                                    Send <FaAngleRight className="ml-1"/>
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </section>
            </>
        );
    }
}

export default Contactsection3;
