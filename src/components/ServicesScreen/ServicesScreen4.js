import React, { Component } from 'react';
import { Container,Image,Row,Col,Card,Button,ListGroup } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaAngleRight } from 'react-icons/fa'


export default () => (
  <StaticQuery
    query={graphql`
      query {
    allWordpressWpCpt411 {
      edges {
        node {
          acf {
            paragraph
            title
            image {
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
        data.allWordpressWpCpt411 &&
        data.allWordpressWpCpt411.edges &&
        data.allWordpressWpCpt411.edges.map(
        prop => {
          return (
                  <Col xl={4} lg={4} md={12} className="mb-4 service-card">
                        <div className="service-block-two">
                           <div class="inner-box wow fadeInLeft  animated" >
                            <Card className="border-0">
                              <div className="icon-box">
                                <Card.Img variant="top" src={prop.node.acf.image.source_url}  fluid />
                              </div>
                              <Card.Body className="p-0">
                                <Card.Title className="font-22 font-bold">{prop.node.acf.title}</Card.Title>
                                <Card.Text className=" font-14 font-regular">{prop.node.acf.paragraph}</Card.Text>
                                <Link to="/" className="nav-link p-0 font-18 font-regular">Learn more<FaAngleRight className="pl-2" /> </Link>
                              </Card.Body>
                            </Card>
                           <div class="shape-one"></div><div class="shape-two"></div><div class="shape-three"></div>
                          </div>
                        </div>
                      </Col>
          )
          }
        )}
    </>                    
    )}
  />
)