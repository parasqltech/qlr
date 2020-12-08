import React, { Component,useState } from 'react';
import { ListGroup,Navbar,Nav,Form,FormControl,Button, Container,Image,NavDropdown } from 'react-bootstrap'
import { FaTwitter,FaLinkedinIn,FaPhoneAlt,FaEnvelope } from 'react-icons/fa'
import { Link, StaticQuery, graphql } from 'gatsby'
import logo from '../../images/logo.png'
import MainMenu from '../Menu/MainMenu'
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
<Navbar collapseOnSelect expand="lg" className="p-0">
<Navbar.Brand>
<Link className="nav-link p-0" to="/">
<Image src={logo} className="img-fluid header-logo" />
</Link>
</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
<Nav className="ml-auto">
<ListGroup as="ul" horizontal>
    <MainMenu/>
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