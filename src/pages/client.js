import React, {Component} from 'react';
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import ClientSection1 from '../components/Client/clientSection1'
import ClientSection2 from '../components/Client/clientSection2'
import Footer from '../components/common/Footer'

class Client extends Component {
    render() {
        return (
            <Layout>
              <>
                    <ClientSection1/>
                    <ClientSection2/>
                    <Footer/>
              </>
            </Layout>
        )
    }
}
export default Client