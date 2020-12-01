import React, { Component } from 'react';
import { Container,Accordion, Card, Button , Collapse } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby'

class FAQ extends Component {

  handleToggle = (id) => {
    
        document.querySelectorAll('.card:not(.id'+id+')').forEach(function(button) {  
      if(!button.classList.contains(".id"+id)){
        button.classList.remove('active');
      }
    });
    
    if (document.querySelector(".id"+id).classList.contains('active')) {
      document.querySelector(".id"+id).classList.remove('active');
    } else {
      document.querySelector(".id"+id).classList.add('active');
    }
    
    }
  
  render() {
    return (
      <StaticQuery
    query={graphql`
      query {
  allWordpressWpCpt433 {
    edges {
      node {
        acf {
          according1
          according2
        }
      }
    }
  }
}
  `}
    render={data => (
    <>
      {data &&
        data.allWordpressWpCpt433 &&
        data.allWordpressWpCpt433.edges &&
        data.allWordpressWpCpt433.edges.map(
        (prop,i) => {
          return (
                  
                        <Card  className={"p-0 mb-4 id"+i}>
                            <Card.Header>
                            <Accordion.Toggle className="font-18 font-semibold p-0" as={Button} onClick={() => {this.handleToggle(i)}} variant="link" eventKey={'"'+i+'"'}>
                                {prop.node.acf.according1}
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={'"'+i+'"'}>
                            <Card.Body className="font-16">
                                {prop.node.acf.according2}
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    
          )
          }
        )}
    </>                    
    )}
  />
    ) 
  }



}
export default FAQ