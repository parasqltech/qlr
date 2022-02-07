import React, { Component,useState } from 'react';
import { ListGroup,Navbar,Nav,Form,FormControl,Button, Container,Image,NavDropdown } from 'react-bootstrap'
import { FaTwitter,FaLinkedinIn,FaPhoneAlt,FaEnvelope } from 'react-icons/fa'
import { Link, StaticQuery, graphql } from 'gatsby'
import logo from '../../images/QLRlogo.svg'
import HeaderSocialTwitter from '../Menu/HeaderSocialTwitter'
import HeaderSocialLinked from '../Menu/HeaderSocialLinkedIn'
import HeaderSocialPhone from '../Menu/HeaderSocialPhone'
import HeaderSocialPhoneIcon from '../Menu/HeaderSocialPhoneIcon'
import HeaderSocialenvelope from '../Menu/HeaderSocialenvelope'
import HeaderSocialenvelopeIcon from '../Menu/HeaderSocialenvelopeIcon'
class Header extends Component {
  
    state = {
        isTop: true,
    };

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        });
    }
        

render() {

return (
    <>
    <header className={this.state.isTop ? '' : 'sticky'} >
        <div className="social-header">
            <Container>
                <div className="d-md-block d-none">
                    <div className="d-flex justify-content-between ">
                        <div className="first-li">
                            <ListGroup as="ul" horizontal>
                                <HeaderSocialLinked/>
                                <HeaderSocialTwitter/>
                            </ListGroup>
                        </div>
                        <div className="second-li">
                            <ListGroup as="ul" horizontal>
                                <HeaderSocialPhoneIcon/>
                                <ListGroup.Item as="li" >
                                    |
                                </ListGroup.Item>
                                <HeaderSocialenvelopeIcon/>
                            </ListGroup>
                        </div>
                    </div>
                </div>

                <div className="d-md-none d-block">
                    <div className="d-flex justify-content-end medium-justify-center">
                        <div className="first-li">
                            <ListGroup as="ul" horizontal>
                                <HeaderSocialPhone/>
                                <HeaderSocialenvelope/>
                                <HeaderSocialLinked/>
                                <HeaderSocialTwitter/>
                            </ListGroup>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
        <div className="sub-header">
            <Container>
                <Navbar collapseOnSelect expand="xl" className="p-0">
                    <Navbar.Brand>
                        <Link className="nav-link p-0" to="/">
                            <Image src={logo} className="img-fluid header-logo" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                          
                            <ListGroup as="ul" horizontal>
                              
                            <StaticQuery
                                query={graphql`
                                    query {
                                    allWordpressWpApiMenusMenusItems(
                                        filter: { slug: { eq: "gatsby-header-menu" } }
                                        ) {
                                            edges {
                                            node {
                                                slug
                                                name
                                                items {
                                                title
                                                url
                                                object_slug
                                                wordpress_children {
                                                  wordpress_id
                                                  title
                                                  url
												  object_slug
                                              }
                                        }
                                        }
                                    }
                                    }
                                }
                                `}


                                render={data => {
                                    return (
                                    <>

                                    {data &&
                                    data.allWordpressWpApiMenusMenusItems &&
                                    data.allWordpressWpApiMenusMenusItems.edges &&
                                    data.allWordpressWpApiMenusMenusItems.edges[0] &&
                                    data.allWordpressWpApiMenusMenusItems.edges[0].node &&
                                    data.allWordpressWpApiMenusMenusItems.edges[0].node.items &&
                                    data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
                                    (prop,i) => {
                                    return (
                                    <>
									
									{(prop.wordpress_children) ? 
									(
										 <NavDropdown className="font-16 font-semibold"  title={prop.title} id="navbarScrollingDropdown">
											{prop && prop.wordpress_children && prop.wordpress_children.map((child, i) => {
												return (
													<>
														{(child.url.indexOf("service")!= -1) ? (
														
														<Link to={"/services/"+child.object_slug}  className="dropdown-item" role="button">{child.title}</Link>
													) : (
															
															<Link to={"/"+child.url.toLowerCase().replace("http://", '')}  className="dropdown-item" role="button">{child.title}</Link>
													)}
													</>
												)
											})}
										</NavDropdown>
									) : 
									
									(
										<>
											{(prop.url.indexOf("service")!= -1) ? (
												<ListGroup.Item as="li" className="font-16 font-semibold">
													<Link className="nav-link" to={"/services/"+prop.object_slug}>{prop.title}</Link>
												</ListGroup.Item>
											) : (
												<ListGroup.Item as="li" className="font-16 font-semibold">
													<Link className="nav-link" to={"/"+prop.url.toLowerCase().replace("http://", '')}>{prop.title}</Link>
												</ListGroup.Item>

											)}
										</>
									)}
									
									
									
                                       
                                    </>
                                    )})}
                                    </>
                                    )
                                }}
                                />

                            </ListGroup>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    </header>
    </>
);
}
}

export default Header;
