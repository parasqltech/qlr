import React, { Component } from 'react';
import { Container,Image,Row,Col } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'


export default () => (
  <StaticQuery
    query={graphql`
      query {
    allWordpressWpCpt577 {
      edges {
        node {
          acf {
            content
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
        data.allWordpressWpCpt577 &&
        data.allWordpressWpCpt577.edges &&
        data.allWordpressWpCpt577.edges.map(
        prop => {
          return (
          <Row>
            <Col xl={6} lg={6} className="md-mb-4">
            <div dangerouslySetInnerHTML={{ __html: prop.node.acf.content}} className="" />
            </Col>
            <Col xl={6} lg={6} className="">
                <div className="side-sticky">
                    <div className="main-blog-image mb-3">
                      <Image src={prop.node.acf.image.source_url} fluid/>
                    </div>
                </div>
            </Col> 
          </Row> 
          )
          }
        )}
    </>                    
    )}
  />
)