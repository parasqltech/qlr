import React, {Component} from 'react';
import { Link, StaticQuery, graphql } from 'gatsby'
import { Container,Image,Row,Col,Card,Button,ListGroup } from 'react-bootstrap';
import { FaFacebookF,FaInstagram,FaTwitter,FaPinterestP } from 'react-icons/fa'
import logo from '../../images/logo.png'
import arrowleft from '../../images/footer-arrow.png'
import footermap from '../../images/footer-map.png'
import footermail from '../../images/footer-envelop.png'
import footercall from '../../images/footer-call.png'
import FooterProject from '../Footer/FooterProject'
import FooterServices from '../Footer/FooterServices'
import FooterAddress from '../Footer/FooterAddress'
import FooterEmail from '../Footer/FooterEmail'
import FooterMobile from '../Footer/FooterMobile'

class Footer extends Component {
    render() {
        return (
            <>
            
            <footer>
                <Container>
                  <Row>
                    <Col xl={3} lg={6} md={12} sm={12} className="lg-mb-4">
                      <div className="footer-data-inner">
                      <Link to="/">
                        <Image src={logo} fluid className="footer-logo mb-4"/>
                      </Link>

                        <p className="font-16 font-regular">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
                          ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos</p>
                        <p className="font-16 font-regular mb-2">Contact with us :</p>
                          <ListGroup as="ul" horizontal className="align-items-center">
                            <ListGroup.Item as="li" className="font-16 font-regular">
                            <Link className="nav-link p-0" target="_blank" to="/">
                                <FaFacebookF/>
                            </Link>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className="font-16 font-regular">
                              <Link className="nav-link p-0" target="_blank" to="/">
                                <FaInstagram/>
                              </Link>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className="font-16 font-regular">
                              <Link className="nav-link p-0" target="_blank" to="/">
                                <FaTwitter/>
                              </Link>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className="font-16 font-regular">
                              <Link className="nav-link p-0" target="_blank" to="/">
                                <FaPinterestP/>
                              </Link>
                            </ListGroup.Item>
                          </ListGroup>
                      </div>
                    </Col>
                    <Col xl={3} lg={3} md={6} sm={6} className="lg-mb-4">
                      <div className="footer-data">
                        <h3 className="font-bold font-18 mb-4">Projects</h3>
                        <ListGroup as="ul">
                          <FooterProject/>
                        </ListGroup>
                      </div>                                                                                                                  
                    </Col>
                    <Col xl={3} lg={3} md={6} sm={6} className="lg-mb-4">
                      <div className="footer-data">
                        <h3 className="font-bold font-18 mb-4">Services</h3>
                        <ListGroup as="ul">
                            <FooterServices/>
                        </ListGroup>
                      </div>
                    </Col>
                    <Col xl={3} lg={12} md={12} sm={12} className="lg-mb-4">
                      <div className="footer-data social-li-pad">
                        <h3 className="font-bold font-18 mb-4">Contact Us</h3>
                        
                        <ListGroup as="ul">
                            <ListGroup.Item as="li" className="font-16 font-regular">
                              <div className="d-flex">    
                                  <div className="footer-arrow-image last mr-2">
                                     <Image src={footermap} className="img-fluid "/>
                                  </div>    
                                  <div className="footer-arrow-data last">
                                    {/* <Link to="" className="nav-link p-0"> 45 St Georges Terrace,Ground Floor, Perth, 6000</Link> */}
                                    <a href="#" className="nav-link p-0"><FooterAddress/></a>
                                  </div>
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className="font-16 font-regular">
                              <div className="d-flex">    
                                  <div className="footer-arrow-image last mr-2">
                                     <Image src={footermail} className="img-fluid "/>
                                  </div>    
                                  <div className="footer-arrow-data last">
                                    {/* <Link to="" className="nav-link p-0"> support@qltech.com.au</Link> */}
                                    <a href="mailto:support@qltech.com.au" className="nav-link p-0"><FooterEmail/></a>
                                  </div>
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className="font-16 font-regular">
                              <div className="d-flex">    
                                  <div className="footer-arrow-image last mr-2">
                                     <Image src={footercall} className="img-fluid "/>
                                  </div>    
                                  <div className="footer-arrow-data last">
                                    {/* <Link to="" className="nav-link p-0"> +61 8 6262 3559</Link> */}
                                    <a href="tel:+61862623559" className="nav-link p-0"><FooterMobile/></a>
                                  </div>
                              </div>
                            </ListGroup.Item>
                        </ListGroup>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </footer>
              <div className="sub-footer">
                <Container>
                  <p className="font-16 font-regular text-white text-center mb-0">© 2020 QLResources All rights reserved.</p>
                </Container>
              </div>
            </>
        );
    }
}

export default Footer;