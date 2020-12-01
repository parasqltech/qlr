import React, { Component } from 'react';
import { Container,Row,Col,Card,ListGroup,Form,InputGroup,FormControl,Image,Pagination } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaPinterestP, FaUserAlt, FaCommentAlt,FaFacebookF,FaTwitter,FaSearch,FaAngleRight } from 'react-icons/fa'


export default () => (
  <StaticQuery
    query={graphql`
      query {
	  allWordpressWpCpt243 {
	    edges {
	      node {
	        acf {
	          list1
	          list2
	          pargraph
	          span
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
        data.allWordpressWpCpt243 &&
        data.allWordpressWpCpt243.edges &&
        data.allWordpressWpCpt243.edges.map(
        prop => {
          return (
            <div className="blog-data">
                                <Card className="p-0 border-0 mb-50">
                                    <Card.Img variant="top" src={prop.node.acf.image.source_url} fluid />
                                    <Card.Body className="">
                                    <div class="date align-items-center">
                                        <p className="font-25 font-bold mt-1 mb-0">
                                            {prop.node.acf.pargraph}
                                        </p>
                                        <span className="font-16 font-regular mb-0">
                                            {prop.node.acf.span}
                                        </span>
                                    </div>
                                    <Card.Title className="font-22 font-bold title-color">{prop.node.acf.title1}</Card.Title>
                                    <Card.Text className="mb-3 font-16-line-height font-regular">{prop.node.acf.title2}</Card.Text>
                                    <div className="card-footer d-flex justify-content-between align-items-center d-small-block">
                                        <ListGroup as="ul" horizontal>
                                            <ListGroup.Item as="li" className="font-16 font-regular"><FaCommentAlt className="font-16 font-regular mr-2"/><span className="mr-1">{prop.node.acf.list1}</span> Comments</ListGroup.Item>
                                            <ListGroup.Item as="li" className="font-16 font-regular"><FaUserAlt className="font-16 font-regular mr-2"/>{prop.node.acf.list2}</ListGroup.Item>
                                        </ListGroup>
                                        <Link to="/blogdetails" className="nav-link p-0 font-16 font-regular xs-mt-2">Learn more<FaAngleRight className="pl-2" /> </Link>
                                    </div>
                                    </Card.Body>
                                </Card>
                            </div>
            )
          }
        )}
    </>                    
    )}
  />
)
