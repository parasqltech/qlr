import React, { Component } from 'react';
import { Container,Row,Col,Media,Image } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import call from '../../images/blue-call.png'
import mail from '../../images/blue-mail.png'
export default () => (
  <StaticQuery
    query={graphql`
      query {
    allWordpressWpCpt610 {
      edges {
        node {
          acf {
            content
            content2
            email
            linkemail
            linkphone
            phone
          }
        }
      }
    }
  }

  `}
    render={data => (
    <>
      {data &&
        data.allWordpressWpCpt610 &&
        data.allWordpressWpCpt610.edges &&
        data.allWordpressWpCpt610.edges.map(
        prop => {
          return (
           <Container>
            <Col xl={6} lg={6} className="md-mb-4">
            <div dangerouslySetInnerHTML={{ __html: prop.node.acf.content}} className="" />
            </Col>
            <Row className="mb-4 align-items-center">
              <Col xl={4} lg={4} md={6} className="sm-mb-4 ">
                  <a href={prop.node.acf.linkemail} className="h-100">
                  <Media className="align-items-center d-flex">
                      <img width="30" className="mr-3 img-fluid" src={mail}/>
                      <Media.Body>
                          <p className="font-18 font-semibold color-666 mb-0">{prop.node.acf.email}</p>
                      </Media.Body>
                  </Media>
                  </a>
              </Col>
              <Col xl={4} lg={4} md={6} className="">            
                  <a href={prop.node.acf.linkphone} className="h-100">
                  <Media className="align-items-center d-flex">
                      <img width="30" className="mr-3 img-fluid" src={call}/>
                      <Media.Body>
                          <p className="font-18 font-semibold color-666 mb-0">+61 <span className="ml-1">{prop.node.acf.phone}</span></p>
                      </Media.Body>
                  </Media>
                  </a>
              </Col>
          </Row>
          <Col xl={6} lg={6} className="md-mb-4">
            <div dangerouslySetInnerHTML={{ __html: prop.node.acf.content2}} className="" />
          </Col> 
          </Container>
          )
          }
        )}
    </>                    
    )}
  />
)