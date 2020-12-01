import React from "react"
import {  ListGroup} from 'react-bootstrap'
import { Link, StaticQuery , graphql} from 'gatsby';
export default () => (
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
                prop => {
                  return (
                    <ListGroup.Item as="li" className="font-16 font-semibold font-semibold-to-regular">
                      <Link className="nav-link" to={"/"+prop.url.toLowerCase().replace("http://", '')}>{prop.title}</Link>
                    </ListGroup.Item>
					
                  )
                }
              )}
         
        </>
      )
    }}
  />
)