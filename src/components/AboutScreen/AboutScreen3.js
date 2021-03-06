import React, { Component } from 'react';
import { Container,Image,Row,Col,Card,Button,ListGroup } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaAngleRight } from 'react-icons/fa'



export default () => (
  <StaticQuery
    query={graphql`
      query {
      allWordpressWpCpt148 {
        edges {
          node {
            acf {
              title1
              title2
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
    <Row>
      {data &&
        data.allWordpressWpCpt148 &&
        data.allWordpressWpCpt148.edges &&
        data.allWordpressWpCpt148.edges.map(
        prop => {
          return (
            
            <Col xl={6} lg={6} md={12} className="mb-4 service-card">
                <div className="service-block-two h-100">
                   <div class="inner-box wow fadeInLeft  animated h-100" >
                    <Card className="border-0">
                      <div className="icon-box">
                        <Card.Img variant="top" src={prop.node.acf.image.source_url}  fluid />
                      </div>
                      <Card.Body className="p-0">
                        <Card.Title className="font-22 font-bold">{prop.node.acf.title1}</Card.Title>
                        <Card.Text className=" font-16 font-regular mb-0">{prop.node.acf.title2}</Card.Text>
                      </Card.Body>
                    </Card>
                   <div class="shape-one"></div>
                   <div class="shape-two"></div>
                  </div>
                </div>
            </Col>
            
            )
          }
        )}
    </Row>                    
    )}
  />
)