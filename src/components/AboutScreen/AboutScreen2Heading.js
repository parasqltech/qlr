import React, { Component } from 'react';
import { Container,Row,Col,Image } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'


export default () => (
  <StaticQuery
    query={graphql`
      query {
    allWordpressWpCpt485 {
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
        data.allWordpressWpCpt485 &&
        data.allWordpressWpCpt485.edges &&
        data.allWordpressWpCpt485.edges.map(
        prop => {
          return (
          <div className="title">
            <h2 className="text-center font-bold">{prop.node.acf.heading}</h2>
            <p className="text-left">{prop.node.acf.paragraph}</p>
          </div>
            )
          }
        )}
    </>                    
    )}
  />
)