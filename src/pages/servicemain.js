import React, {Component} from 'react';
import Layout from '../components/Layout'
import Servicemain1 from '../components/Servicemain/Servicemain1'
import Servicemain2 from '../components/Servicemain/Servicemain2'
import Footer from '../components/common/Footer'

class Servicemain extends Component {
    render() {
        return (
            <Layout>
              <>
                    <Servicemain1/>
                    <Servicemain2/>
                    <Footer/>
              </>
            </Layout>
        )
    }
}
export default Servicemain