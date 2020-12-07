import React, { Component } from 'react';
import { Container,Image,Row,Col } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'


export default () => (
  <StaticQuery
    query={graphql`
      query {
    allWordpressWpCpt587 {
      edges {
        node {
          acf {
            content
            heading
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
        data.allWordpressWpCpt587 &&
        data.allWordpressWpCpt587.edges &&
        data.allWordpressWpCpt587.edges.map(
        prop => {
          return (
            <Row>
            <Col xl={12}>
                <div className="title">
                    <h2 className="text-left mb-0">{prop.node.acf.heading}</h2>
                </div>
            </Col>
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