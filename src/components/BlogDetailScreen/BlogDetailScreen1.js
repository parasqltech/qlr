import React, { Component } from 'react';
import { Container,Row,Col,Card,ListGroup,Form,InputGroup,FormControl,Image,Pagination } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaPinterestP, FaUserAlt, FaCommentAlt,FaFacebookF,FaTwitter,FaSearch,FaAngleRight } from 'react-icons/fa'


export default () => (
  <StaticQuery
    query={graphql`
      query {
      allWordpressWpCpt261 {
        edges {
          node {
            acf {
              image {
                source_url
              }
              list1
              list2
              paragraph
              pargraph1
              pargraph2
              span
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
        data.allWordpressWpCpt261 &&
        data.allWordpressWpCpt261.edges &&
        data.allWordpressWpCpt261.edges.map(
        prop => {
          return (
            <Card className="p-0 border-0 ">
                                    <h3 className="title-color font-22 font-bold">{prop.node.acf.title}</h3>
                                    <div className="card-footer d-flex justify-content-between align-items-center">
                                        <ListGroup as="ul" horizontal className="pb-3">
                                            <ListGroup.Item as="li" className="font-16 font-regular"><FaCommentAlt className="font-16 font-regular mr-2"/><span className="mr-1">{prop.node.acf.list1}</span> Comments</ListGroup.Item>
                                            <ListGroup.Item as="li" className="font-16 font-regular"><FaUserAlt className="font-16 font-regular mr-2"/>{prop.node.acf.list2}</ListGroup.Item>
                                        </ListGroup>
                                    </div>
                                    <div className="position-relative">
                                        <Card.Img variant="top" src={prop.node.acf.image.source_url} fluid />
                                        <div class="date align-items-center">
                                            <p className="font-25 font-bold mt-1 mb-0">
                                                {prop.node.acf.paragraph}
                                            </p>
                                            <span className="font-16 font-regular mb-0">
                                                {prop.node.acf.span}
                                            </span>
                                        </div>
                                    </div>
                                    <Card.Body className="">
                                        <Card.Text className="">
                                            <p className="align-justify font-16-line-height font-regular">
                                            {prop.node.acf.pargraph1}
                                            </p>
                                            <p className="align-justify font-16-line-height font-regular">
                                            {prop.node.acf.pargraph2}
                                            </p>
                                        </Card.Text>
                                        <div className="card-footer align-items-center">
                                            <Row className="">
                                                <Col xl={6} lg={6} md={6} sm={12}>
                                                    <Form.Group className="mb-0 font-16 font-regular tagsList tagsList-horizontal">
                                                        <Form.Check
                                                            inline
                                                            type="checkbox"
                                                            id="tags11"
                                                            className="mb-0"
                                                            label="Business"
                                                        />
                                                        <Form.Check
                                                            inline
                                                            type="checkbox"
                                                            id="tags22"
                                                            className="mb-0"
                                                            label="Consult"
                                                        />
                                                        <Form.Check
                                                            inline
                                                            type="checkbox"
                                                            id="tags33"
                                                            className="mb-0"
                                                            label="Cyber"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col xl={6} lg={6} md={6} sm={12}>
                                                    <ListGroup as="ul" horizontal>
                                                        <ListGroup.Item as="li" className="font-16 font-semibold">
                                                            Share this Post :
                                                        </ListGroup.Item>
                                                        <ListGroup.Item as="li" className="font-16 font-regular">
                                                            <Link to="/" className="color-cf font-22 font-regular">
                                                                <FaFacebookF/>
                                                            </Link>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item as="li" className="font-16 font-regular">
                                                            <Link to="/" className="color-cf font-22 font-regular">
                                                                <FaTwitter/>
                                                            </Link>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item as="li" className="font-16 font-regular">
                                                            <Link to="/" className="color-cf font-22 font-regular">
                                                                <FaPinterestP/>
                                                            </Link>
                                                        </ListGroup.Item>
                                                    </ListGroup>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Card.Body>
                                </Card>
            )
          }
        )}
    </>                    
    )}
  />
)
