import React, { Component } from 'react';
import { Container,Row,Col,Form,InputGroup,FormControl,Image,Button } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaAngleRight } from 'react-icons/fa'
import formname from '../../images/form-name.png'
import formcall from '../../images/form-call.png'
import formmail from '../../images/form-mail.png'
import SimpleReactValidator from 'simple-react-validator';
import ContactScreenTitle3 from '../ContactScreen/ContactScreenTitle3'

class Contactsection3 extends Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
  
        this.state = {
         
          email: '',
          mobile: '',
          lname: '',
          fname: '',
          message: '',
          shown: "d-none",
          IsSubmit: false,
          success: "d-none",
        
        }
      this.submitForm = this.submitForm.bind(this);
      this.email = this.email.bind(this);
      this.mobile = this.mobile.bind(this);
      this.lname = this.lname.bind(this);
      this.fname = this.fname.bind(this);
      this.message = this.message.bind(this);
    }
    
    
    email(e) {
        this.setState({
            email: e.target.value
        });
    }
    mobile(e) {
        this.setState({
            mobile: e.target.value
        });
    }
    lname(e) {
        this.setState({
            lname: e.target.value
        });
    }
    fname(e) {
        this.setState({
            fname: e.target.value
        });
    }
    message(e) {
        this.setState({
            message: e.target.value
        });
    }
    submitForm() {
      if (this.validator.allValid()) {
        alert('if');
        this.setState({success: "d-block"});
        setTimeout(
            function() {
                this.setState({success: "d-none"});
            }
        .bind(this),
            2000
        );
        this.setState({IsSubmit: true});  
        
        
      } else {
        alert('else');
        event.preventDefault()
        this.setState({success: "d-none"});
        this.validator.showMessages();
        this.forceUpdate();
      }
    }
         
    render() {
        return (
            <>
            
            <section className="contact-section-3">
                <Container>
                    <div className="title">
                    <ContactScreenTitle3/>    
                    </div>
                    <Form className='gform' method="POST" action="https://script.google.com/macros/s/AKfycbwvxi4nTkKYAlVfy0kYfqiWRxbw7pI9OCOD_otxZBVjPwTvTtb_fF0O9g/exec">
                        <Row className="mt-4">
                            <Col xl={6} lg={6} md={12}>
                                <Form.Group controlId="">
                                    <InputGroup className="mb-0">
                                        <input type="text" value={this.state.fname} onChange={this.fname} Name='firstName' className="form-control main font-18 font-regular color-666" placeholder="First Name" /> 
                                        <InputGroup.Append>
                                        <InputGroup.Text id=""><Image src={formname} fluid/></InputGroup.Text>
                                        </InputGroup.Append>
                                    </InputGroup>
                                    <span className="errormsg">
                                        {this.validator.message('First Name', this.state.fname, 'required|fname')}
                                    </span>
                                </Form.Group>
                            </Col>
                            <Col xl={6} lg={6} md={12}>
                                <Form.Group controlId="">
                                    <InputGroup className="mb-0">
                                        <input type="text" value={this.state.lname} onChange={this.lname} Name='lastName' className="form-control main font-18 font-regular color-666" placeholder="Last Name" /> 
                                        <InputGroup.Append>
                                        <InputGroup.Text id=""><Image src={formname} fluid/></InputGroup.Text>
                                        </InputGroup.Append>
                                    </InputGroup>
                                    <span className="errormsg">
                                        {this.validator.message('Last Name', this.state.lname, 'required|lname')}
                                    </span>
                                </Form.Group>
                            </Col>
                            <Col xl={6} lg={6} md={12}>
                                <Form.Group controlId="">
                                    <InputGroup className="mb-0">
                                        <input type="text" value={this.state.mobile} onChange={this.mobile} Name='mobile' className="form-control main font-18 font-regular color-666" placeholder="Mobile Number" /> 
                                        <InputGroup.Append>
                                        <InputGroup.Text id=""><Image src={formcall} fluid/></InputGroup.Text>
                                        </InputGroup.Append>
                                    </InputGroup>
                                    <span className="errormsg">
                                        {this.validator.message('Mobile Number', this.state.mobile, 'required|mobile')}
                                        {this.validator.message('Mobile Number', this.state.mobile, 'numeric|min:7,num|max:15')}
                                    </span>
                                </Form.Group>
                            </Col>
                            <Col xl={6} lg={6} md={12}>
                                <Form.Group controlId="">
                                    <InputGroup className="mb-0">
                                        <input type="text" value={this.state.email} onChange={this.email} Name='email' className="form-control main font-18 font-regular color-666" placeholder="Email" />        
                                        <InputGroup.Append>
                                        <InputGroup.Text id=""><Image src={formmail} fluid/></InputGroup.Text>
                                        </InputGroup.Append>
                                    </InputGroup>
                                    <span className="errormsg">
                                        {this.validator.message('Email', this.state.email, 'required|email')}
                                    </span>
                                </Form.Group>
                            </Col>
                            <Col xl={12} lg={12} md={12}>
                                <Form.Group controlId="">
                                <Form.Control as="textarea" Name='message' className="font-18 font-regular color-666" rows="4" placeholder="Message" value={this.state.message} onChange={this.message}/>
                                <span className="errormsg">
                                        {this.validator.message('Message', this.state.message, 'required|message')}
                                    </span>
                                </Form.Group>
                            </Col>
                            <Col xl={12} lg={12} md={12} className="justify-content-center d-flex">
                                <Button variant="" type="submit" onClick={this.submitForm} className="blue font-semibold d-flex alignn-items-center">
                                    Send <FaAngleRight className="ml-1"/>
                                </Button>
                            </Col>
                            <Col xl={12} className="justify-content-center d-flex">
                                <div className={this.state.success}>
                                    <p className="succes-block">Successfully</p>
                                </div>
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
