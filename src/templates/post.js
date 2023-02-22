import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { Container,Image,Row,Col } from 'react-bootstrap';
import Layout from '../components/Layout'
import Footer from '../components/common/Footer'
export const BlogPostTemplate = ({
  content,
  categories,
  tags,
  title,
  date,
	image,
}) => {
  return (
	<>
	<div className="main-padding-header">
		<section className="banner-section">
			<Container>
				<div className="text-white text-center">
					<h2 className="font-40 font-uppercase font-bold mb-0">{title}</h2>
				</div>
			</Container>
		</section>
	</div>
	<section>
	 	<Container>
	 	<Row>
		    <Col xs lg="6"><img className="card-img-top" src={image}/></Col>
		   
		  </Row>
	  	</Container>
	 </section>
	<section className="project-section-2 service-main-section-2">
		<Container>
			<div dangerouslySetInnerHTML={{ __html: content }} className="" />
		</Container>
	</section>       
    
    <Footer/>
    </>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
}

const BlogPost = ({ data }) => {
  const { wordpressPost: post } = data

  return (
    <Layout>
      <Helmet title={`${post.title} | Blog`} />
      <BlogPostTemplate
        content={post.content}
        categories={post.categories}
        tags={post.tags}
        title={post.title}
        date={post.date}
	image={(post.acf.image != null) ? post.acf.image.source_url : ""}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  fragment PostFields on wordpress__POST {
    id
    slug
    content
    date(formatString: "MMMM DD, YYYY")
    title
  }
  query BlogPostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      slug
      content
      date(formatString: "MMMM DD, YYYY")
      categories {
        name
        slug
      }
	    acf {
          
          image{
	  	source_url
	  }
        }  
      tags {
        name
        slug
      }
    }
  }
`
