import React, { Component } from 'react';
import { Container,Image,Row,Col } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'


export default () => (
  <StaticQuery
    query={graphql`
      query {
    allWordpressWpCpt577 {
      edges {
        node {
          acf {
            content
          }
        }
      }
    }
  }
  `}
    render={data => (
    <>
      {data &&
        data.allWordpressWpCpt577 &&
        data.allWordpressWpCpt577.edges &&
        data.allWordpressWpCpt577.edges.map(
        prop => {
          return (
            <>
            {prop.node.acf.content}
            </>
          )
          }
        )}
    </>                    
    )}
  />
)