import React, { Component } from 'react';
import { Container,Image,Row,Col,Card,Button,ListGroup } from 'react-bootstrap';
import { Link, StaticQuery , graphql} from 'gatsby';
import { FaAngleRight } from 'react-icons/fa'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const settings = {
        dots: false,
        infinite: true,
        autoplay:true,
        autoplaySpeed:2000,
        slidesToShow: 6,
        slidesToScroll: 1, 
        responsive: [
         {
           breakpoint: 800,
           settings: {
             slidesToShow: 5,
             slidesToScroll: 1
           }
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 5,
             slidesToScroll: 1
           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 4,
             slidesToScroll: 1
           }
         }
       ]
      };

export default () => (
  <StaticQuery
    query={graphql`
      query {
  allWordpressWpCpt75 {
    edges {
      node {
        acf {
          dummy
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
        data.allWordpressWpCpt75 &&
        data.allWordpressWpCpt75.edges &&
        data.allWordpressWpCpt75.edges.map(
        prop => {
          return (
            <>
            <div className="slider-data">
                    <Image src={prop.node.acf.image.source_url} className="img-fluid"/>
            </div>
              
               
           </>
            )
          }
        )}
    </Slider>                   
    )}
  />
)