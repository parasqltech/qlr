import React, { Component } from 'react';
import { Container,Breadcrumb } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'


export default () => (
  <StaticQuery
    query={graphql`
      query {
    allWordpressWpCpt645 {
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
        data.allWordpressWpCpt645 &&
        data.allWordpressWpCpt645.edges &&
        data.allWordpressWpCpt645.edges.map(
        prop => {
          return (
            
            <div className="text-white text-center">
              <h2 className="font-40 font-uppercase font-bold mb-4 xs-mb-1">{prop.node.acf.heading}</h2>
            </div>
          )
          }
        )}
    </>                    
    )}
  />
)