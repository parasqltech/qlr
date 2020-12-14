import React, { Component } from 'react';
import { Container,Row,Col,Media,Image } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import Iframe from 'react-iframe'
import map from '../../images/blue-map.png'
import call from '../../images/blue-call.png'
import mail from '../../images/blue-mail.png'
export default () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpCpt507 {
          edges {
            node {
              acf {
                title
                paragraph
                paragraph2
              }
            }
          }
        }
      }
    `}
    render={data => (
    <>
      {data &&
        data.allWordpressWpCpt507 &&
        data.allWordpressWpCpt507.edges &&
        data.allWordpressWpCpt507.edges.map(
        prop => {
          return (
            <div className="title">
                <h2 className="text-center">{prop.node.acf.title}</h2>
                <p className="text-center">{prop.node.acf.paragraph}</p>
                <p className="text-center">{prop.node.acf.paragraph2}</p>
            </div>
            )
          }
        )}
    </>                    
    )}
  />
)
