import React, {Component} from 'react';
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import BlogDetailSectionBanner from '../components/BlogDetails/BlogDetailSectionBanner'
import BlogDetailSection1 from '../components/BlogDetails/BlogDetailSection-1'
import BlogDetailSection2 from '../components/BlogDetails/BlogDetailSection-2'
import BlogDetailSection3 from '../components/BlogDetails/BlogDetailSection-3'
import Footer from '../components/common/Footer'

class Blogdetails extends Component {
    render() {
        return (
            <Layout>
              <>
                    <BlogDetailSectionBanner/>
                    <BlogDetailSection1/>
                    <BlogDetailSection2/>
                    <BlogDetailSection3/>
                    <Footer/>
              </>
            </Layout>
        )
    }
}
export default Blogdetails