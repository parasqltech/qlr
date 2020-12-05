import React, { Component } from 'react';
import { Container,Row,Col,Media,Image } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import Iframe from 'react-iframe'
import map from '../../images/blue-map.png'
import call from '../../images/blue-call.png'
import mail from '../../images/blue-mail.png'
export default () => (
  <StaticQuery
    query={graphql`
      query {
      allWordpressWpCpt307 {
        edges {
          node {
            acf {
              heading
              paragraph
              address
              email
              mobile
              paragraph1
              imageEmail {
                source_url
              }
              imagelocation {
                source_url
              }
              imagemobile {
                source_url
              }
            }
          }
        }
      }
    }
    `}
    render={data => (
    <>
      {data &&
        data.allWordpressWpCpt307 &&
        data.allWordpressWpCpt307.edges &&
        data.allWordpressWpCpt307.edges.map(
        prop => {
          return (
                <Container>
                  <div className="title">
                        <h2 className="text-center">{prop.node.acf.heading}</h2>
                        <p className="text-center">{prop.node.acf.paragraph}</p>
                  </div>
                  
                  <Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3385.1889096226905!2d115.859075!3d-31.9557714!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bb29e26a22b5%3A0x4237fca06c578d13!2s45%20St%20Georges%20Terrace%2C%20Perth%20WA%206000%2C%20Australia!5e0!3m2!1sen!2sin!4v1598633772764!5m2!1sen!2sin"
                        width="100%"
                        height="500px"
                        className="map-iframe"
                        position="relative"
                        frameBorder="0" 
                        allowFullScreen/>
                    
                    <p className="font-25 font-regular text-center mb-30">{prop.node.acf.paragraph1}</p>

                    <Row className="mb-4 align-items-center">
                        <Col xl={4} lg={4} md={12} className="md-mb-4">
                            <a href="https://www.google.com/maps?ll=-31.955771,115.859075&z=16&t=m&hl=en&gl=IN&mapclient=embed&q=45+St+Georges+Terrace+Perth+WA+6000+Australia" target="_blank" className="h-100">
                              <Media className="align-items-center d-flex">
                                  <img width="30" className="mr-3 img-fluid" src={prop.node.acf.imagelocation.source_url}/>
                                  <Media.Body>
                                      <p className="font-18 font-semibold color-666 mb-0">{prop.node.acf.address}</p>
                                  </Media.Body>
                              </Media>
                            </a>
                        </Col>
                        <Col xl={4} lg={4} md={12} className="md-mb-4 ">
                            <a href="mailto:raj@qlresources.com.au" className="h-100">
                              <Media className="align-items-center d-flex">
                                  <img width="30" className="mr-3 img-fluid" src={prop.node.acf.imageEmail.source_url}/>
                                  <Media.Body>
                                      <p className="font-18 font-semibold color-666 mb-0">{prop.node.acf.email}</p>
                                  </Media.Body>
                              </Media>
                            </a>
                        </Col>
                        <Col xl={4} lg={4} md={12} className="md-mb-4 ">            
                            <a href="tel:+61410881616" className="h-100">
                              <Media className="align-items-center d-flex">
                                  <img width="30" className="mr-3 img-fluid" src={prop.node.acf.imagemobile.source_url}/>
                                  <Media.Body>
                                      <p className="font-18 font-semibold color-666 mb-0">+61 <span className="ml-2">{prop.node.acf.mobile}</span></p>
                                  </Media.Body>
                              </Media>
                            </a>
                        </Col>
                    </Row>

                  </Container>
            )
          }
        )}
    </>                    
    )}
  />
)
