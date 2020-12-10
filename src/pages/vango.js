import React, {Component} from 'react';
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import VangoSection1 from '../components/Project/Vangosection1'
import VangoSection2 from '../components/Project/Vangosection2'
import Footer from '../components/common/Footer'

class Vango extends Component {
    render() {
        return (
            <Layout>
              <>
                    <VangoSection1/>
                    <VangoSection2/>
                    <Footer/>
              </>
            </Layout>
        )
    }
}
export default Vango