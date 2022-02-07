import React, { Component,useState } from 'react';
import { ListGroup,Navbar,Nav,Form,FormControl,Button, Container,Image,NavDropdown } from 'react-bootstrap'
import { FaTwitter,FaLinkedinIn,FaPhoneAlt,FaEnvelope,FaTimes,FaAngleLeft,FaBars } from 'react-icons/fa'
import { Link, StaticQuery, graphql } from 'gatsby'
import logo from '../../images/QLRlogo.svg'
import Mining from '../../images/Home-Mining-1.jpg'
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
    <header className={this.state.isTop ? 'header' : 'sticky header'} >
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
					<div className="header-item-center">
						<div className="overlay"></div>
						<nav className="menu" id="menu">
							<div className="menu-mobile-header">
								<button type="button" className="menu-mobile-arrow"><FaAngleLeft/></button>
								<div className="menu-mobile-title"></div>
								<button type="button" className="menu-mobile-close"><FaTimes/></button>
							</div>
							<ul className="menu-section">
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
										<li className="menu-item-has-children">
											<a href="#">{prop.title} <i className="ion ion-ios-arrow-down"></i></a>
											
											{(prop.title == 'Services') ? 
											(
												<>
												<div className="menu-subs menu-mega menu-column-4">
													{prop && prop.wordpress_children && prop.wordpress_children.map((child, i) => {
														return (
														<div className="list-item">
															<h4 className="title">{child.title}</h4>
															<ul>
																<li><a href="#">Mineral Resource Estimation</a></li>
																<li><a href="#">Data Management (Mining and Exploration)</a></li>
																<li><a href="#">Mineral Statistical Analusis</a></li>
																<li><a href="#">Pit Structural Mapping</a></li>
																<li><a href="#">Geological Risk assessment</a></li>
																<li><a href="#">Resource Recovery</a></li>
																<li><a href="#">JORC Code Compliance Reporting</a></li>
															</ul>
														</div>
													)})}
												<div className="list-item">
													<img src={Mining} />
												</div>
												</div>
												
												</>
											) 
											: 
											
											(
												<div className="menu-subs menu-column-1">
													<ul>	
													{prop && prop.wordpress_children && prop.wordpress_children.map((child, i) => {
														return (
														<>
															{(child.url.indexOf("service")!= -1) ? (
															
															<li><Link to={"/services/"+child.object_slug}  className="dropdown-item" role="button">{child.title}</Link></li>
														) : (
																
																<li><Link to={"/"+child.url.toLowerCase().replace("https://admin.qlresources.com.au", '')}  className="dropdown-item" role="button">{child.title}</Link></li>
														)}
														</>
														)
													})}
													</ul>
												</div>
											)}
											
											
										</li>
									) : 
									
									(
										<>
											{(prop.url.indexOf("service")!= -1) ? (
												<li className="menu-item">
													<Link className="nav-link" to={"/services/"+prop.object_slug}>{prop.title}</Link>
												</li>
											) : (
												
												<li className="menu-item"><Link to={"/"+prop.url.toLowerCase().replace("http://", '')}>{prop.title}</Link></li>
											)}
										</>
									)}
									
									
									
                                       
                                    </>
                                    )})}
                                    </>
                                    )
                                }}
                                />
							</ul>
						</nav>
<button type="button" className="menu-mobile-toggle">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</button>
					</div>
                    
                </Navbar>
            </Container>
        </div>
    </header>
    </>
);
}
}

export default Header;
