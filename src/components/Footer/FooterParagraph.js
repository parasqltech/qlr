import React, { Component } from 'react';
import { Container,Breadcrumb } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query {
      allWordpressWpCpt562 {
        edges {
          node {
            acf {
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
        data.allWordpressWpCpt562 &&
        data.allWordpressWpCpt562.edges &&
        data.allWordpressWpCpt562.edges.map(
        prop => {
          return (
            <p className="font-16 font-regular">{prop.node.acf.paragraph}</p>
                        
            )
          }
        )}
    </>                    
    )}
  />
)
