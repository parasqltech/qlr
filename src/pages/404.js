import React from 'react'
import Layout from '../components/Layout'
import { Container } from 'react-bootstrap';

const NotFoundPage = () => (
  <Layout>
    <div>
    <Container>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
    </div>
  </Layout>
)

export default NotFoundPage
