import React, { Component } from 'react';
import { Container,Row,Col,Nav,Card,Tab,Pagination } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaAngleRight } from 'react-icons/fa'
import card1 from '../../images/home-card-1.png'
import card2 from '../../images/home-card-2.png'
import card3 from '../../images/home-card-3.png'
import card4 from '../../images/home-card-4.png'
import ClientScreen2 from '../ClientScreen/ClientScreen2'
import ClientScreen2Image from '../ClientScreen/ClientScreen2Image'
import ClientScreen2Tab from '../ClientScreen/ClientScreen2Tab'

class ClientSection2 extends Component {

     
    render() {
        
        return (
            <>
            <section className="client-section-2">
                <Container>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        
                        <ClientScreen2/>
                        
                        <Tab.Content className="text-left">
                        <Tab.Pane eventKey="first">
                        <Row>
                        <ClientScreen2Image/>
                        </Row>
                        <Pagination className="justify-content-center mt-4">
                        <Pagination.Prev className="prev" />
                        <Pagination.Item active>{1}</Pagination.Item>
                        
                        <Pagination.Next className="next"/>
                        </Pagination>
                        </Tab.Pane>
                        <ClientScreen2Tab/>     
                        </Tab.Content>    
                    </Tab.Container>
                </Container>
            </section>
            </>
        );
    }
}

export default ClientSection2;
