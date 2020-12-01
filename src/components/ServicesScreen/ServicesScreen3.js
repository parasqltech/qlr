import React, { Component } from 'react';
import { Container,Image,Row,Col,Card,Button,ListGroup } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaAngleRight } from 'react-icons/fa'


export default () => (
  <StaticQuery
    query={graphql`
      query {
    allWordpressWpCpt343 {
      edges {
        node {
          acf {
            cardtext
            cardtitle
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
        data.allWordpressWpCpt343 &&
        data.allWordpressWpCpt343.edges &&
        data.allWordpressWpCpt343.edges.map(
        prop => {
          return (
              <Col xl={5} lg={5} md={12} sm={12} className="md-mb-4 mb-30">
                        <div className="position-relative">
                          <Image src={prop.node.acf.image.source_url} className="img-fluid"/>
                          <div className="inner-data-card bg-white">
                            <Card className="p-0 border-0">
                              <Card.Body className="p-4">
                                <Card.Title className="font-22 font-bold">{prop.node.acf.cardtitle}</Card.Title>
                                <Card.Text className="line-break-2 font-14 font-regular">{prop.node.acf.cardtext}</Card.Text>
                                <Link to="" className="nav-link p-0 font-18 font-regular">Learn more<FaAngleRight className="pl-2" /> </Link>
                              </Card.Body>
                            </Card>
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