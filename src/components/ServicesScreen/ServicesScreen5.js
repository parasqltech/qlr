import React, { Component } from 'react';
import { Container,Image,Card } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaAngleRight } from 'react-icons/fa'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const settings = {
        dots: false,
        infinite: true,
        autoplay:false,
        autoplaySpeed:2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

export default () => (
  <StaticQuery
    query={graphql`
      query {
    allWordpressWpCpt437 {
      edges {
        node {
          acf {
            cardtext
            cardtitle
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
    <Slider {...settings}>
      {data &&
        data.allWordpressWpCpt437 &&
        data.allWordpressWpCpt437.edges &&
        data.allWordpressWpCpt437.edges.map(
        prop => {
          return (
                  
                        <Card className="p-0 border-0">
                            <Card.Img variant="top" src={prop.node.acf.image.source_url} fluid />
                            <Card.Body className="pl-0 pr-0 pb-0">
                            <Card.Title className="font-22 font-bold">{prop.node.acf.cardtitle}</Card.Title>
                            <Card.Text className=" font-14 font-regular">{prop.node.acf.cardtext}</Card.Text>
                            <Link to="" className="nav-link p-0 font-18 font-regular">Learn more<FaAngleRight className="pl-2" /> </Link>
                            </Card.Body>
                        </Card>
                    
          )
          }
        )}
    </Slider>                    
    )}
  />
)