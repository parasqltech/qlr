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
import Cookies from 'universal-cookie';
import { init } from '@amplitude/analytics-browser';
import { track } from '@amplitude/analytics-browser';

class Header extends Component {
  
    	constructor(props) {
		super(props);
		this.toggleMenu = this.toggleMenu.bind(this);
		this.showSubMenu = this.showSubMenu.bind(this);
		this.hideSubMenu = this.hideSubMenu.bind(this);
		this.createUUID = this.createUUID.bind(this);	
	}
	
	createUUID(){
    		var dt = new Date().getTime();
    		var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        		var r = (dt + Math.random()*16)%16 | 0;
        		dt = Math.floor(dt/16);
        		return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    		});
    		return uuid;
	}
	
	toggleMenu(){
		
		menu.classList.toggle('active');
		menuOverlay.classList.toggle('active');
	}
	showSubMenu(hasChildren) {
		let subMenu;  
		subMenu = hasChildren.querySelector('.menu-subs');
		subMenu.classList.add('active');
		subMenu.style.animation = 'slideLeft 0.5s ease forwards';
		const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
		menu.querySelector('.menu-mobile-title').innerHTML = menuTitle;
		menu.querySelector('.menu-mobile-header').classList.add('active');
	}
	 hideSubMenu() {
		var elems = document.querySelectorAll(".menu-subs");

		[].forEach.call(elems, function(el) {
		    el.classList.remove("active");
		});
		
		menu.querySelector('.menu-mobile-title').innerHTML = '';
		menu.querySelector('.menu-mobile-header').classList.remove('active');
	}
	state = {
        	isTop: true,
    	};

    componentDidMount() {
	const cookies = new Cookies();
	var aid =  cookies.get('aid');
	if(aid == undefined){
		 var code = this.createUUID();
		cookies.set("aid",code,{ domain: '.qlresources.com.au' , path: '/' });
	}	
	var url_action = window.location.href;
	init("98d739df3e97915d4ef13950a4e14c76");
	console.log(document.title)
	const anid = cookies.get('aid');
	const eventProperties = {
	  pageUrl: url_action,
	anonymoudId: anid,
		pageName:document.title

	};
	console.log(eventProperties);
	track('Page Viewed', eventProperties);    
	    
	const menu = document.querySelector('.menu');
	const menuSection = menu.querySelector('.menu-section');
	const menuArrow = menu.querySelector('.menu-mobile-arrow');
	const menuClosed = menu.querySelector('.menu-mobile-close');
	const menuToggle = document.querySelector('.menu-mobile-toggle');
	const menuOverlay = document.querySelector('.overlay');
	let subMenu;    
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        });
	document.addEventListener('resize', () => { 
	if (window.innerWidth > 991) {
		
		if (menu.classList.contains('active')) {
			this.toggleMenu();
		}
	}
	});	
	 
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
					<Link to={"/"} className="brand"><img src={logo} /></Link>
				</div>
					<div className="header-item-center">
						<div className="overlay"></div>
						<nav className="menu" id="menu">
							<div className="menu-mobile-header">
								<button type="button" className="menu-mobile-arrow"><i className="ion-ios-arrow-back"></i></button>
								<div className="menu-mobile-title"></div>
								<button type="button" className="menu-mobile-close"><i className="ion-android-close"></i></button>
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
																<h4 class="title"><Link to={"/services/"+child.object_slug}>Mine Engineering</Link></h4>
																<ul>
																	<li><Link className="element"  to={"/services/"+child.object_slug+"#stp"} >Short Term Planning</Link></li>
																	<li><Link className="element" to={"/services/"+child.object_slug+"#mlp"} >Medium and Long-Term Planning</Link></li>
																	<li><Link className="element" to={"/services/"+child.object_slug+"#mp"} >Management Plans</Link></li>
																	
																</ul>
															</div>
														) : ("")}
														{(child.title == "Digital Transformation") ? (
														<div className="list-item">
															<h4 className="title"><Link to={"/services/"+child.object_slug}>Digital Transformation</Link></h4>
															<ul>
																<li><Link className="element" to={"/services/"+child.object_slug+"#col"} >Collaborating Mine Planning, Asset Management, Mine Monitoring and Dispatch, SCADA Systems Data</Link></li>
																<li><Link className="element" to={"/services/"+child.object_slug+"#gis"} >GIS: Data Visualisation</Link></li>
																<li><Link className="element" to={"/services/"+child.object_slug+"#pap"} >Paperless Inspections</Link></li>
															</ul>
															
														
														</div>
														) : ("")}
														{(child.title == "Geology and Resources") ? (
														<div class="list-item">
															<h4 class="title"><Link to={"/services/"+child.object_slug}>Geology And Resources</Link></h4>
															<ul>
																<li><Link className="element" to={"/services/"+child.object_slug+"#me"} >Mineral Exploration</Link></li>
																<li><Link className="element" to={"/services/"+child.object_slug+"#dm"} >Data Management (Exploration & Mining)</Link></li>
																<li><Link className="element" to={"/services/"+child.object_slug+"#msa"} >Mineral Statistical Analysis</Link></li>
																<li><Link className="element" to={"/services/"+child.object_slug+"#bm"} >Block Modelling & Estimation</Link></li>
																<li><Link className="element" to={"/services/"+child.object_slug+"#psm"} >Pit Structural Mapping</Link></li>
																<li><Link className="element" to={"/services/"+child.object_slug+"#gra"} >Geological Risk Assessment</Link></li>
																<li><Link className="element" to={"/services/"+child.object_slug+"#jorc"} >JORC Code Compliance Reporting</Link></li>
																<li><Link className="element" to={"/services/"+child.object_slug+"#rr"} >Resource Recovery</Link></li>
																
															</ul>
															
														</div>
														) : ("")}
														{(child.title == "Mining Equipment Supply") ? (
														<div class="list-item">
															<h4 class="title"><Link to={"/services/"+child.object_slug}>Mining Equipment Supply</Link></h4>
														</div>
														) : ("")}
														</>
														
														
													)})}
												
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
														
														<>{(child.title == 'Blog') ? (<li  ><Link  to={"/"+child.url.toLowerCase().replace("http://", '')}  className="dropdown-item" role="button">{child.title}</Link></li>) : (
															<li  ><Link  to={"/"+child.url.toLowerCase().replace("https://admin.qlresources.com.au/", '')}  className="dropdown-item" role="button">{child.title}</Link></li>
														)}</>
																
																
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
