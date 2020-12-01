import React, { Component } from 'react';
import { Container,Row,Col,Nav,Card,Tab,Pagination } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaAngleRight } from 'react-icons/fa'


export default () => (
  <StaticQuery
    query={graphql`
      query {
    allWordpressWpCpt200 {
      edges {
        node {
          acf {
            nav
            naveventkey
          }
        }
      }
    }
  }

	`}
    render={data => (
    <Row>
      {data &&
        data.allWordpressWpCpt200 &&
        data.allWordpressWpCpt200.edges &&
        data.allWordpressWpCpt200.edges.map(
        prop => {
          return (
                    
            
                        <div className="p-0 border-0 d-block mb-50">
                            <Nav variant="pills" className="">
                                <Nav.Item>
                                    <Nav.Link eventKey="{prop.node.acf.naveventkey}" className="font-16">{prop.node.acf.nav}</Nav.Link>
                                </Nav.Item>
                                
                            </Nav>
                        </div>
                        
                            
                    
          )
          }
        )}
    </Row>                    
    )}
  />
)