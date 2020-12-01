import React from "react"
import { Container,Image,Row,Col,Card,Button,ListGroup } from 'react-bootstrap';
import arrowleft from '../../images/footer-arrow.png'
import { Link , StaticQuery, graphql } from "gatsby";
export default () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpApiMenusMenusItems(
          filter: { slug: { eq: "gatsby-footer-service" } }
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
        <nav className="menu">
          <ul className="nav flex-column">
            {data &&
              data.allWordpressWpApiMenusMenusItems &&
              data.allWordpressWpApiMenusMenusItems.edges &&
              data.allWordpressWpApiMenusMenusItems.edges[0] &&
              data.allWordpressWpApiMenusMenusItems.edges[0].node &&
              data.allWordpressWpApiMenusMenusItems.edges[0].node.items &&
              data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
                prop => {
                  return (
                    <ListGroup.Item as="li" className="font-16 font-regular">
                              <div className="d-flex">    
                                  <div className="footer-arrow-image mr-2">
                                     <Image src={arrowleft} className="img-fluid "/>
                                  </div>    
                                  <div className="footer-arrow-data">
                                    <Link to={prop.url} className="nav-link p-0"> {prop.title}</Link>
                                  </div>
                              </div>
                    </ListGroup.Item>
                  )
                }
              )}
          </ul>
        </nav>
      )
    }}
  />
)