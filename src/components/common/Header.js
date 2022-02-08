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
  
    	constructor(props) {
		this.toggleMenu = this.toggleMenu.bind(this);
		this.showSubMenu = this.showSubMenu.bind(this);
		this.hideSubMenu = this.hideSubMenu.bind(this);
	}
	toggleMenu(){
		const menu = document.querySelector('.menu');
		const menuOverlay = document.querySelector('.overlay');
		menu.classList.toggle('active');
		menuOverlay.classList.toggle('active');
	}
	showSubMenu(hasChildren) {
		let subMenu;
		const menu = document.querySelector('.menu');
		subMenu = hasChildren.querySelector('.menu-subs');
		subMenu.classList.add('active');
		subMenu.style.animation = 'slideLeft 0.5s ease forwards';
		const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
		menu.querySelector('.menu-mobile-title').innerHTML = menuTitle;
		menu.querySelector('.menu-mobile-header').classList.add('active');
	}
	 hideSubMenu() {
		let subMenu;
		const menu = document.querySelector('.menu');
		subMenu.style.animation = 'slideRight 0.5s ease forwards';
		setTimeout(() => {
			subMenu.classList.remove('active');
		}, 300);

		menu.querySelector('.menu-mobile-title').innerHTML = '';
		menu.querySelector('.menu-mobile-header').classList.remove('active');
	}
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
	document.addEventListener('resize', () => { 
	if (window.innerWidth > 991) {
		const menu = document.querySelector('.menu');
		if (menu.classList.contains('active')) {
			this.toggleMenu();
		}
	}
	});	
	 const menu = document.querySelector('.menu');
	const menuSection = menu.querySelector('.menu-section');
	const menuArrow = menu.querySelector('.menu-mobile-arrow');
	const menuClosed = menu.querySelector('.menu-mobile-close');
	const menuToggle = document.querySelector('.menu-mobile-toggle');
	const menuOverlay = document.querySelector('.overlay');   
	menuSection.addEventListener('click', (e) => {
		if (!menu.classList.contains('active')) {
			return;
		}
		if (e.target.closest('.menu-item-has-children')) {
			const hasChildren = e.target.closest('.menu-item-has-children');
			this.showSubMenu(hasChildren);
		}
	});    
	 menuArrow.addEventListener('click', () => {
		this.hideSubMenu();
	});

	menuToggle.addEventListener('click', () => {
		this.toggleMenu();
	});

	menuClosed.addEventListener('click', () => {
		this.toggleMenu();
	});

	menuOverlay.addEventListener('click', () => {
		this.toggleMenu();
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
				<section className="wrapper">	
                    <div className="header-item-left">
					<a href="" className="brand"><img src="https://www.qlresources.com.au/static/QLRlogo-be571d35457b531dd5c6f93883af4188.svg" /></a>
				</div>
					<div className="header-item-center">
						<div className="overlay"></div>
						<nav className="menu" id="menu">
							<div className="menu-mobile-header">
								<button type="button" className="menu-mobile-arrow"><i className="ion ion-ios-arrow-back"></i></button>
								<div className="menu-mobile-title"></div>
								<button type="button" className="menu-mobile-close"><i className="ion ion-ios-close"></i></button>
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
														<>
														{(child.title == "Mining Engineering") ? (
															<div class="list-item">
																<h4 class="title">Mine Engineering</h4>
																<ul>
																	<li><a href="#">Short Term Planing </a></li>
																	<li><a href="#">Medium and Long Trem Planning</a></li>
																	<li><a href="#">Product List</a></li>
																	<li><a href="#">Management Plans</a></li>
																</ul>
															</div>
														) : ("")}
														{(child.title == "Digital Transformation") ? (
														<div className="list-item">
															<h4 className="title">Digital Transformation</h4>
															<ul>
																<li><a href="#">Mine Planning</a></li>
																<li><a href="#">Asset Management</a></li>
																<li><a href="#">Mine Monitoring & Dispatch</a></li>
																<li><a href="#">SCADA Systems Data</a></li>
																<li><a href="#">GIS: Data Visualisation </a></li>
																<li><a href="#">Paperless Inspections </a></li>
															</ul>
															
														
														</div>
														) : ("")}
														{(child.title == "Geology and Resources") ? (
														<div class="list-item">
															<h4 class="title">Geology And Resources</h4>
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
														) : ("")}
														</>
														
														
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
					</section>
                    
               
            </Container>
        </div>
    </header>
    </>
);
}
}

export default Header;
