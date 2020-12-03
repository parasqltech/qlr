import React, { Component } from 'react';
import { Container,Image,Row,Col,Card,Button,ListGroup } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaAngleRight } from 'react-icons/fa'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default () => (
  <StaticQuery
    query={graphql`
      query {
    allWordpressWpCpt90 {
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
    <>
      {data &&
        data.allWordpressWpCpt90 &&
        data.allWordpressWpCpt90.edges &&
        data.allWordpressWpCpt90.edges.map(
        prop => {
          return (
          <Col xl={6} lg={6} md={12} sm={12} className="lg-mb-4 mb-30">
              <div className="position-relative">
                <Image src={prop.node.acf.image.source_url} className="img-fluid"/>
                <div className="inner-data-card bg-white">
                  <Card className="p-0 border-0">
                    <Card.Body className="p-4">
                      <Card.Title className="font-22 font-bold">{prop.node.acf.title1}</Card.Title>
                      <Card.Text className="font-14 font-regular">{prop.node.acf.title2}</Card.Text>
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