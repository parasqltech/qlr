import React, { Component } from 'react';
import { Container,Image,Row,Col,Card,Button,ListGroup } from 'react-bootstrap';
import { Link, StaticQuery , graphql} from 'gatsby';
import { FaAngleRight } from 'react-icons/fa'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpCpt60 {
          edges {
            node {
              id
              slug
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
              data.allWordpressWpCpt60 &&
              data.allWordpressWpCpt60.edges &&
              data.allWordpressWpCpt60.edges.map(
                prop => {

                  return(
                    <Col xl={3} lg={3} md={6} sm={12} className="md-mb-4">
                      <Card className="p-0 border-0">
                        <Card.Img variant="top" src={prop.node.acf.image.source_url} fluid />
                        <Card.Body className="pl-0 pr-0 pb-0">
                          <Card.Title className="font-22 font-bold">{prop.node.acf.title1}</Card.Title>
                          <Card.Text className="line-break-2 font-14 font-regular">{prop.node.acf.title2}</Card.Text>
                          <Link to="/" className="nav-link p-0 font-18 font-regular">Learn more<FaAngleRight className="pl-2" /> </Link>
                        </Card.Body>
                      </Card>
                    </Col>
                    )
                  
                }
              )}
         
        </Row>
      
    )}
  />
)