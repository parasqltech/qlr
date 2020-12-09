import React, { Component } from 'react';
import { Container,Image,Row,Col } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'


export default () => (
  <StaticQuery
    query={graphql`
      query {
      allWordpressWpCpt646 {
        edges {
          node {
            acf {
              content
              title
              image {
                source_url
              }
            }
          }
        }
      }
    }

  `}
    render={data => (
    <>
      {data &&
        data.allWordpressWpCpt646 &&
        data.allWordpressWpCpt646.edges &&
        data.allWordpressWpCpt646.edges.map(
        prop => {
          return (
          <Container>
          <p>{prop.node.acf.title}</p>
          
          <Image src={prop.node.acf.image.source_url} fluid className="mb-3" />
          <div dangerouslySetInnerHTML={{ __html: prop.node.acf.content}} className="" />
          </Container>
          )
          }
        )}
    </>                    
    )}
  />
)