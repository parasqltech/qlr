import React, { Component } from 'react';
import { Container,Button,Col,Row } from 'react-bootstrap';
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
            <>
            <Row className="justify-content-center">
                <Col xl={10} lg={10} md={12} sm={12}>
                  <div className="home-section-6-inner-data">
                    <h2 className="font-50 font-bold mb-4">{prop.node.acf.title}</h2>
                    <Button className="blue font-16 font-semibold">know more <FaAngleRight className="ml-2"/></Button>
                  </div>
                </Col>
            </Row>
            
            </>
            )
          }
        )}
    </>                    
    )}
  />
)
