import React, { Component } from 'react';
import { Container,Breadcrumb } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'


export default () => (
  <StaticQuery
    query={graphql`
      query {
  allWordpressWpCpt490 {
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
        data.allWordpressWpCpt490 &&
        data.allWordpressWpCpt490.edges &&
        data.allWordpressWpCpt490.edges.map(
        prop => {
          return (
          <div className="title">
            <h2 className="text-center">{prop.node.acf.heading}</h2>
            <p className="text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
          </div>
            )
          }
        )}
    </>                    
    )}
  />
)