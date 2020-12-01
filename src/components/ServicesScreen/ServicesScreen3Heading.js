import React, { Component } from 'react';
import { Container,Image,Row,Col,Card,Button,ListGroup } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaAngleRight } from 'react-icons/fa'


export default () => (
  <StaticQuery
    query={graphql`
      query {
    allWordpressWpCpt406 {
      edges {
        node {
          acf {
            heading
            paragraph
          }
        }
      }
    }
  }
  `}
    render={data => (
    <>
      {data &&
        data.allWordpressWpCpt406 &&
        data.allWordpressWpCpt406.edges &&
        data.allWordpressWpCpt406.edges.map(
        prop => {
          return (
            <div>
            <h2 className="text-center">{prop.node.acf.heading}</h2>
            <p className="text-center">{prop.node.acf.paragraph}</p>
            </div>          
          )
          }
        )}
    </>                   
    )}
  />
)