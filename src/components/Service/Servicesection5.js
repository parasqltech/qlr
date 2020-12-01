import React, { Component } from 'react';
import { Container,Image,Card } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaAngleRight } from 'react-icons/fa'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import card4 from '../../images/home-card-4.png'
import ServicesScreen5 from '../ServicesScreen/ServicesScreen5'
class servicesection5 extends Component {

     
    render() {
        
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
        return (
            <>
            
            <section className="service-section-5">
                <Container>
                    <div className="title">
                      <h2 className="text-center">Lorem ipsum dolor sit?</h2>
                      <p className="text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                    </div>
                  
                  <div>
                    <ServicesScreen5/>
                    </div>
                  
                  </Container>
              </section>

            </>
        );
    }
}

export default servicesection5;
