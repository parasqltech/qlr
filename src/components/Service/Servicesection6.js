import React, { Component } from 'react';
import { Container,Accordion, Card, Button , Collapse } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import ServicesScreen6 from '../ServicesScreen/ServicesScreen6'
class servicesection6 extends Component {

    handleToggle = (id) => {
		
        document.querySelectorAll('.card:not(.id'+id+')').forEach(function(button) {	
			if(!button.classList.contains(".id"+id)){
				button.classList.remove('active');
			}
		});
		
		if (document.querySelector(".id"+id).classList.contains('active')) {
		  document.querySelector(".id"+id).classList.remove('active');
		} else {
		  document.querySelector(".id"+id).classList.add('active');
		}
		
    } 
    
    render() {
        return (
            <>
            
            <section className="service-section-6">
                <Container>
                    <div className="title">
                      <h2 className="text-center">Lorem ipsum dolor sit?</h2>
                      <p className="text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                    </div>
                    
                    
                    <Accordion defaultActiveKey="">
                     <ServicesScreen6/>
                    </Accordion>

                  </Container>
              </section>

            </>
        );
    }
}

export default servicesection6;
