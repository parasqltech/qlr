import React, { Component } from 'react';
import { Container,Row,Col,Nav,Card,Tab,Pagination } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaAngleRight } from 'react-icons/fa'


export default () => (
  <StaticQuery
    query={graphql`
      query {
    allWordpressWpCpt220 {
      edges {
        node {
          acf {
            image {
              source_url
            }
            title1
            title2
          }
        }
      }
    }
  }

	`}
    render={data => (
    <Row>
      {data &&
        data.allWordpressWpCpt220 &&
        data.allWordpressWpCpt220.edges &&
        data.allWordpressWpCpt220.edges.map(
        prop => {
          return (
          
                                
                                    <Col xl={4} lg={4} md={6} sm={12} className="mb-30">
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