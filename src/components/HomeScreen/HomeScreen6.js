import React, { Component } from 'react';
import { Container,Button } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaAngleRight } from 'react-icons/fa'


export default () => (
  <StaticQuery
    query={graphql`
      query {
      allWordpressWpCpt133 {
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
        data.allWordpressWpCpt133 &&
        data.allWordpressWpCpt133.edges &&
        data.allWordpressWpCpt133.edges.map(
        prop => {
          return (
          <Container>
          <h2 className="font-60 font-bold mb-4">{prop.node.acf.title}</h2>
          <Button className="blue font-16 font-semibold">know more <FaAngleRight className="ml-2"/></Button>
          </Container>
            )
          }
        )}
    </>                    
    )}
  />
)
