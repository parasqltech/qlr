import React, {Component} from 'react';
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Blogsection1 from '../components/Blog/Blogsection1'
import Blogsection2 from '../components/Blog/Blogsection2'
import Footer from '../components/common/Footer'

class Blog extends Component {
    render() {
        return (
            <Layout>
              <>
                    <Blogsection1/>
                    <Blogsection2/>
                    <Footer/>
              </>
            </Layout>
        )
    }
}
export default Blog