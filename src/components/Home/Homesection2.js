import React, { Component } from 'react';
import { Container,Image,Row,Col,Button } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../../images/slider-1.png'
import icon1 from '../../images/slide-icon-1.png'
import icon2 from '../../images/slide-icon-2.png'
import icon3 from '../../images/slide-icon-3.png'
import icon4 from '../../images/slide-icon-4.png'
import icon5 from '../../images/slide-icon-5.png'
import icon6 from '../../images/slide-icon-6.png'
import HomeScreen2 from '../HomeScreen/HomeScreen2'
class HomeSection2 extends Component {

     
    render() {
        
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
        return (
            <>
            
            <section className="home-section-2 ">
                <Container>
                 
                    
                    <HomeScreen2/>
                    
                  
                  </Container>
              </section>

            </>
        );
    }
}

export default HomeSection2;
