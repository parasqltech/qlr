import React, { Component } from 'react';
import { Container,Image,Row,Col,ListGroup } from 'react-bootstrap';
import { FaLinkedinIn,FaEnvelope } from 'react-icons/fa'
import { Link, StaticQuery, graphql } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query {
      allWordpressWpCpt166 (sort: {fields: wordpress_id, order: ASC}){
        edges {
          node {
            acf {
              image{
	      	source_url
	      }
              title1
              title2
              title3
              link1
              link2
	      img
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
	     console.log(prop);
          return (
            
             <Col xl={4} lg={4} md={6} sm={12} className="mb-4">
                <div className="team-block">
                    <div className="inner-box">
                        <div className="image">
                              
                            
                            <div className="texts">
                                <p className="font-regular text-white ">{prop.node.acf.title1}</p>
                            </div>
                        </div>
                        <div className="lower-box">
                            <ListGroup as="ul" className="social-box">
                                <ListGroup.Item as="li" className="">
                                    <Link className="nav-link font-22" to={prop.node.acf.link1} target="_blank">
                                        <FaLinkedinIn/>
                                    </Link>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="">
                                    <a className="nav-link font-22" href={"mailto:"+prop.node.acf.link2}>
                                        <FaEnvelope/>
                                    </a>
                                </ListGroup.Item>
                            </ListGroup>
                            <div class="content">
                                <h5>
                                    <span className="nav-link">
                                      {prop.node.acf.title2}
                                    </span>
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
