import React, { Component } from 'react';
import { Container,Breadcrumb } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'


export default () => (
  <StaticQuery
    query={graphql`
      query {
      allWordpressWpCpt337 {
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
        data.allWordpressWpCpt337 &&
        data.allWordpressWpCpt337.edges &&
        data.allWordpressWpCpt337.edges.map(
        prop => {
          return (
            
            <div className="title mb-0">
                        <h2 className="text-center">{prop.node.acf.heading}</h2>
                        <p className="font- align-justify mb-0">{prop.node.acf.paragraph}</p>
                    </div>
          )
          }
        )}
    </>                    
    )}
  />
)