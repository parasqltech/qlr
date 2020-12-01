import React, { Component } from 'react';
import { Container,Image,Row,Col,Card,Button,ListGroup } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaAngleRight } from 'react-icons/fa'


export default () => (
  <StaticQuery
    query={graphql`
      query {
    allWordpressWpCpt416 {
      edges {
        node {
          acf {
            heading
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
        data.allWordpressWpCpt416 &&
        data.allWordpressWpCpt416.edges &&
        data.allWordpressWpCpt416.edges.map(
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