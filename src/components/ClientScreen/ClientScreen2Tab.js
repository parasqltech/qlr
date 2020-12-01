import React, { Component } from 'react';
import { Container,Row,Col,Nav,Card,Tab,Pagination } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaAngleRight } from 'react-icons/fa'


export default () => (
  <StaticQuery
    query={graphql`
      query {
  allWordpressWpCpt464 {
    edges {
      node {
        acf {
          tab
          tabevent
        }
      }
    }
  }
}


	`}
    render={data => (
    <>
      {data &&
        data.allWordpressWpCpt464 &&
        data.allWordpressWpCpt464.edges &&
        data.allWordpressWpCpt464.edges.map(
        prop => {
          return (
          
                        <Tab.Pane eventKey="{prop.node.acf.tabevent}">
                                <h1>{prop.node.acf.tab}</h1>
                            </Tab.Pane>
                            
                         
                    
          )
          }
        )}
    </>                    
    )}
  />
)