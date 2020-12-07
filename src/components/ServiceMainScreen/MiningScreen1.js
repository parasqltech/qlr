import React, { Component } from 'react';
import { Container,Breadcrumb } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'


export default () => (
  <StaticQuery
    query={graphql`
      query {
    allWordpressWpCpt573 {
      edges {
        node {
          acf {
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
        data.allWordpressWpCpt573 &&
        data.allWordpressWpCpt573.edges &&
        data.allWordpressWpCpt573.edges.map(
        prop => {
          return (
            
            <div className="text-white text-center">
              <h2 className="font-40 font-uppercase font-bold mb-4 xs-mb-1">{prop.node.acf.title}</h2>
            </div>
          )
          }
        )}
    </>                    
    )}
  />
)