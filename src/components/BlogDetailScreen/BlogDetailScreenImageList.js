import React, { Component } from 'react';
import { Container,Row,Col,Card,ListGroup,Form,InputGroup,FormControl,Image,Pagination } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaPinterestP, FaUserAlt, FaCommentAlt,FaFacebookF,FaTwitter,FaSearch,FaAngleRight } from 'react-icons/fa'


export default () => (
  <StaticQuery
    query={graphql`
      query {
      allWordpressWpCpt286 {
        edges {
          node {
            acf {
              title1
              title2
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
        data.allWordpressWpCpt286 &&
        data.allWordpressWpCpt286.edges &&
        data.allWordpressWpCpt286.edges.map(
        prop => {
          return (
      
                
                    <ListGroup as="ul">
                        <ListGroup.Item as="li" className="d-flex">
                                <div className="img-box-sidebar">
                                <Image src={prop.node.acf.image.source_url} className="img-fluid border-0"/>
                                </div>
                                <div className="content-box-sidebar ">
                                    <h2 className="font-18 font-bold title-color mb-1">{prop.node.acf.title1}</h2>
                                    <span className="font-14 font-regular">{prop.node.acf.title2}</span>
                                </div>
                        </ListGroup.Item> 
                    </ListGroup>
            )
          }
        )}
    </>                    
    )}
  />
)
