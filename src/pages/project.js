import React, {Component} from 'react';
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import ProjectSection1 from '../components/Project/Projectsection1'
import ProjectSection2 from '../components/Project/Projectsection2'
import Footer from '../components/common/Footer'

class Client extends Component {
    render() {
        return (
            <Layout>
              <>
                    <ProjectSection1/>
                    <ProjectSection2/>
                    <Footer/>
              </>
            </Layout>
        )
    }
}
export default Client