import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

export default class IndexPage extends React.Component {
  render() {
    const { posts, title } = this.props

    return (
      <section className="section home-section-3">
        <div className="container">
         
          {posts.map(({ node: post }) => (
		  
		  
			<div className="md-mb-4 h-100 col-xl-4 col-lg-4 col-md-6 col-sm-12">
				<div className="p-0 border-0 card">
					<img className="card-img-top" src={post.acf.featured_image.source_url}/>
					<div className="pl-0 pr-0 pb-0 h-100 card-body">
						<div className="font-22 font-bold card-title h5">{post.title}</div>
							<p><small>
                  {post.date} - posted by{' '}
                  <Link to={`/author/${post.author.slug}`}>
                    {post.author.name}
                  </Link>
                </small></p>
							<div className=" font-16 font-regular card-text" dangerouslySetInnerHTML={{ __html: post.excerpt.substring(0, 500)}} />
		  
		  
								<Link className="nav-link p-0 font-18 font-regular" to={post.slug} >Keep Reading → </Link>
									
					</div>
				</div>
			</div>
          ))}
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export const pageQuery = graphql`
  fragment PostListFields on wordpress__POST {
    id
    title
    excerpt
    author {
      name
      slug
      avatar_urls {
        wordpress_48
      }
    }
	acf {
          
          featured_image {
            source_url
          }
        }  
    date(formatString: "MMMM DD, YYYY")
    slug
  }
`
