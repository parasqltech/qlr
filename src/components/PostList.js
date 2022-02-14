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
					<img className="card-img-top" src="https://admin.qlresources.com.au/wp-content/uploads/2020/11/Home-Mining-1.jpg"/>
					<div className="pl-0 pr-0 pb-0 h-100 card-body">
						<div className="font-22 font-bold card-title h5">{post.title}</div>
							<p><small>
                  {post.date} - posted by{' '}
                  <Link to={`/author/${post.author.slug}`}>
                    {post.author.name}
                  </Link>
                </small></p>
							<p className=" font-16 font-regular card-text" dangerouslySetInnerHTML={{ __html: post.excerpt.substring(0, 500)+"...."}} />
		  
		  
								<Link className="nav-link p-0 font-18 font-regular" to={post.slug} >Keep Reading →
									<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 512" class="pl-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg> 
								</Link>
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
    date(formatString: "MMMM DD, YYYY")
    slug
  }
`
