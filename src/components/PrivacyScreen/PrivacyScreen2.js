import React, { Component } from 'react';
import { Container,Row,Col,Media,Image } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import call from '../../images/blue-call.png'
import mail from '../../images/blue-mail.png'
export default () => (
  <StaticQuery
    query={graphql`
      query {
    allWordpressWpCpt610 {
      edges {
        node {
          acf {
            content
            content2
            email
            linkemail
            linkphone
            phone
          }
        }
      }
    }
  }

  `}
    render={data => (
    <>
      {data &&
        data.allWordpressWpCpt610 &&
        data.allWordpressWpCpt610.edges &&
        data.allWordpressWpCpt610.edges.map(
        prop => {
          return (
           <Container>
            <div dangerouslySetInnerHTML={{ __html: prop.node.acf.content}} className="" />

            <div dangerouslySetInnerHTML={{ __html: prop.node.acf.content2}} className="" />
          </Container>
          )
          }
        )}
    </>                    
    )}
  />
)