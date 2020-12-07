import React, { Component } from 'react';
import { Container,Breadcrumb } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'


export default () => (
  <StaticQuery
    query={graphql`
      query {
      allWordpressWpCpt331 {
        edges {
          node {
            acf {
              title1
              title2
              title3
            }
          }
        }
      }
    }
  `}
    render={data => (
    <>
      {data &&
        data.allWordpressWpCpt331 &&
        data.allWordpressWpCpt331.edges &&
        data.allWordpressWpCpt331.edges.map(
        prop => {
          return (
            
            <div className="text-white text-center">
              <h2 className="font-40 font-uppercase font-bold mb-4 xs-mb-1">{prop.node.acf.title1}</h2>
            </div>
          )
          }
        )}
    </>                    
    )}
  />
)