import React, { Component } from 'react';
import { Container,Breadcrumb } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'

class Blogsection1 extends Component {

     
    render() {
        
        return (
            <>
            <div className="main-padding-header">
                <section className="banner-section">
                    <Container>
                        <div className="text-white text-center">
                            <h2 className="font-40 font-uppercase font-bold mb-4 xs-mb-1">Our BLogs</h2>
                            <Breadcrumb>
                                <Breadcrumb.Item className="font-18  font-bold ">
                                    <Link className="nav-link p-0" to="/">Home</Link>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item className="font-18  font-bold ">
                                    <Link className="nav-link p-0" to="/">Blogs</Link>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active href=""className="font-18 font-bold">Blog Details</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </Container>
                </section>
            </div>
            </>
        );
    }
}

export default Blogsection1;
