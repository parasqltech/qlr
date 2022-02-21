import React, {Component} from 'react';
import { graphql,Link } from "gatsby"
import PropTypes from "prop-types"
import Layout from '../components/Layout'
import { Container,Image,Row,Col } from 'react-bootstrap';
import Footer from '../components/common/Footer'
import $ from "jquery"

class Services extends Component {

constructor(props) {
super(props);
}
componentDidMount() {
   if(window.location.hash) {
 	var hash = window.location.hash.substring(1);
	$('html,body').unbind().animate({scrollTop: $("#"+hash).offset().top-$(".sub-header").height()},'slow');
  }
}

render() {
const page = this.props.data.allWordpressWpCpt680;


console.log(page);
return (
<Layout>
<div className="main-padding-header">
<section className="banner-section">
    <Container>
        <div className="text-white text-center">
				<h2 className="font-40 font-uppercase font-bold mb-0">{page.edges[0].node.title}</h2>
		</div>
    </Container>
</section>
</div>
<section className="service-main-section-2">
<Container>
    <Row>
        <Col xl={6} lg={6} className="md-mb-4">
        <div dangerouslySetInnerHTML={{ __html: page.edges[0].node.acf.content }} className="" />
        </Col>
        <Col xl={6} lg={6} className="">
            <div className="side-sticky">
                <div className="main-blog-image mb-3">
                  <Image src={page.edges[0].node.acf.image.source_url} fluid/>
                </div>
            </div>
        </Col> 
    </Row> 
</Container>
</section>           
<Footer/>
</Layout>
)
}
}

Services.propTypes = {
data: PropTypes.object.isRequired,
edges: PropTypes.array,
}

export default Services


export const pageQuery = graphql`
query($id: String!) {
allWordpressWpCpt680(filter: {id: { eq: $id }}) {
edges {
node {
id
acf {
content
image {
source_url
}
}
slug
title
}
}
}


}

`
