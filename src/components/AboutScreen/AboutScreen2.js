import React, { Component } from 'react';
import { Container,Row,Col,Image } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default () => (
  <StaticQuery
    query={graphql`
      query {
      allWordpressWpCpt141 {
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
    <>
      {data &&
        data.allWordpressWpCpt141 &&
        data.allWordpressWpCpt141.edges &&
        data.allWordpressWpCpt141.edges.map(
        prop => {
          return (
            <Row>
             <Col xl={7} lg={7} md={7} className="sm-mb-2">
                <div className="bg-gray p-4 md-p-0">
                    <p className="font-bold font-22 color-303030">{prop.node.acf.title1}</p>
                    <p className="font-18 font-regular mb-0 align-justify">
                    {prop.node.acf.title2}
                    </p>
                </div>  
            </Col>
            <Col xl={5} lg={5} md={5}>
              <Image src={prop.node.acf.image.source_url} className="img-fluid"/>
            </Col>
            </Row>
            )
          }
        )}
    </>                    
    )}
  />
)