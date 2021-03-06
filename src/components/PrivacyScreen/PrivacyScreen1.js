import React, { Component } from 'react';
import { Container,Breadcrumb } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'


export default () => (
  <StaticQuery
    query={graphql`
      query {
    allWordpressWpCpt617 {
      edges {
        node {
          acf {
            heading
          }
        }
      }
    }
  }
  `}
    render={data => (
    <>
      {data &&
        data.allWordpressWpCpt617 &&
        data.allWordpressWpCpt617.edges &&
        data.allWordpressWpCpt617.edges.map(
        prop => {
          return (
            <div className="text-white text-center">
              <h2 className="font-40 font-uppercase font-bold mb-0">{prop.node.acf.heading}</h2>
            </div>
          )
          }
        )}
    </>                    
    )}
  />
)