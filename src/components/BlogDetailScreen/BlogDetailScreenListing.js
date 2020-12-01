import React, { Component } from 'react';
import { Container,Row,Col,Card,ListGroup,Form,InputGroup,FormControl,Image,Pagination } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaPinterestP, FaUserAlt, FaCommentAlt,FaFacebookF,FaTwitter,FaSearch,FaAngleRight } from 'react-icons/fa'


export default () => (
  <StaticQuery
    query={graphql`
      query {
    allWordpressWpCpt274 {
      edges {
        node {
          acf {
            list1
            list2
            list3
            list4
            list5
            list6
            list7
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
        data.allWordpressWpCpt274 &&
        data.allWordpressWpCpt274.edges &&
        data.allWordpressWpCpt274.edges.map(
        prop => {
          return (
                <div className="inner-sidebar mb-4">
                  <h3 className="font-18 mb-3 font-bold">{prop.node.acf.title}</h3>
                                        <ListGroup as="ul" className="low-opacity">
                                            <ListGroup.Item as="li" className="font-18 justify-content-between d-flex align-items-center">
                                                <Link to="/" className="mr-1 color-303030 font-regular letter-space-1">{prop.node.acf.list1}</Link> <p className="mb-0 color-303030 font-regular">(1)</p>
                                            </ListGroup.Item> 
                                            <ListGroup.Item as="li" className="font-18 justify-content-between d-flex align-items-center">
                                                <Link to="/" className="mr-1 color-303030 font-regular letter-space-1">{prop.node.acf.list2}</Link> <p className="mb-0 color-303030 font-regular">(1)</p>
                                            </ListGroup.Item> 
                                            <ListGroup.Item as="li" className="font-18 justify-content-between d-flex align-items-center">
                                                <Link to="/" className="mr-1 color-303030 font-regular letter-space-1">{prop.node.acf.list3}</Link> <p className="mb-0 color-303030 font-regular">(1)</p>
                                            </ListGroup.Item> 
                                            <ListGroup.Item as="li" className="font-18 justify-content-between d-flex align-items-center">
                                                <Link to="/" className="mr-1 color-303030 font-regular letter-space-1">{prop.node.acf.list4}</Link> <p className="mb-0 color-303030 font-regular">(1)</p>
                                            </ListGroup.Item> 
                                            <ListGroup.Item as="li" className="font-18 justify-content-between d-flex align-items-center">
                                                <Link to="/" className="mr-1 color-303030 font-regular letter-space-1">{prop.node.acf.list5}</Link> <p className="mb-0 color-303030 font-regular">(1)</p>
                                            </ListGroup.Item> 
                                            <ListGroup.Item as="li" className="font-18 justify-content-between d-flex align-items-center">
                                                <Link to="/" className="mr-1 color-303030 font-regular letter-space-1">{prop.node.acf.list6}</Link> <p className="mb-0 color-303030 font-regular">(1)</p>
                                            </ListGroup.Item> 
                                            <ListGroup.Item as="li" className="font-18 justify-content-between d-flex align-items-center">
                                                <Link to="/" className="mr-1 color-303030 font-regular letter-space-1">{prop.node.acf.list7}</Link> <p className="mb-0 color-303030 font-regular">(1)</p>
                                            </ListGroup.Item>
                                        </ListGroup>
                  </div>
            )
          }
        )}
    </>                    
    )}
  />
)
