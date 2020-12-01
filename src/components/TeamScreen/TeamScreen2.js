import React, { Component } from 'react';
import { Container,Image,Row,Col,ListGroup } from 'react-bootstrap';
import { FaLinkedinIn,FaEnvelope } from 'react-icons/fa'
import { Link, StaticQuery, graphql } from 'gatsby'


export default () => (
  <StaticQuery
    query={graphql`
      query {
      allWordpressWpCpt166 {
        edges {
          node {
            acf {
              image {
                source_url
              }
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
        data.allWordpressWpCpt166 &&
        data.allWordpressWpCpt166.edges &&
        data.allWordpressWpCpt166.edges.map(
        prop => {
          return (
            
             <Col xl={4} lg={4} md={6} sm={12} className="mb-4">
                                <div className="team-block">
                                    <div className="inner-box">
                                        <div className="image">
                                            <Link className="nav-link p-0" to="/">
                                                <Image src={prop.node.acf.image.source_url} className="" fluid/>
                                            </Link>
                                            
                                            <div className="texts">
                                                <p className="font-regular text-white align-justify">{prop.node.acf.title1}</p>
                                            </div>
                                        </div>
                                        <div className="lower-box">
                                            <ListGroup as="ul" className="social-box">
                                                <ListGroup.Item as="li" className="">
                                                    <Link className="nav-link font-22" to="/">
                                                        <FaLinkedinIn/>
                                                    </Link>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li" className="">
                                                    <Link className="nav-link font-22" to="/">
                                                        <FaEnvelope/>
                                                    </Link>
                                                </ListGroup.Item>
                                            </ListGroup>
                                            <div class="content">
                                                <h5>
                                                    <Link className="nav-link" to="/">
                                                    {prop.node.acf.title2}
                                                    </Link>
                                                </h5>
                                                <div class="designation">{prop.node.acf.title3}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
            
            )
          }
        )}
    </>                    
    )}
  />
)