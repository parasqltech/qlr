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
  allWordpressWpCpt568 {
    edges {
      node {
        acf {
          paragraph
          title
        }
      }
    }
  }
}
	`}
    render={data => (
    <>
      {data &&
        data.allWordpressWpCpt568 &&
        data.allWordpressWpCpt568.edges &&
        data.allWordpressWpCpt568.edges.map(
        prop => {
          return (
            <div className="title">
              <h2 className="text-center">{prop.node.acf.title}</h2>
              <p className="text-center"></p>
            </div>
            )
          }
        )}
    </>                    
    )}
  />
)