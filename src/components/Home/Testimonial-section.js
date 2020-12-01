import React, { Component } from 'react';
import { Container,Image,Row,Col,Card,Button,ListGroup } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import user from '../../images/testimonioal-user.png'
import testbutton from '../../images/testimonial-button.png'
import HomeScreenTestimonial from '../HomeScreen/HomeScreenTestimonial'
function SampleNextArrow1(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ display: "block", borderRadius: "25px",border:"2px solid #23A5DD",width:"50px",height:"50px",lineHeight:"50px",textAlign:"center" }}
        onClick={onClick}
      >
        </div>
    );
  }
  
  function SamplePrevArrow1(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ display: "block", borderRadius: "25px",border:"2px solid #23A5DD",width:"50px",height:"50px",lineHeight:"50px",textAlign:"center" }}
        onClick={onClick} >
      </div>
    );
  }
class Testimonialsection extends Component {
     
    render() {
      const settings3 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2500,
        nextArrow: <SampleNextArrow1 />,
        prevArrow: <SamplePrevArrow1 />
      };
        return (
            <>
            <section className="testimonial-section">
                  <Container>
                    <Slider {...settings3} className="testimonial-slider">
                      <HomeScreenTestimonial/>
                  </Slider>
                  </Container>
                </section>
            </>
        );
    }
}

export default Testimonialsection;
