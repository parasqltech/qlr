import React, {Component} from 'react';
import Layout from '../components/Layout'
import Servicemain1 from '../components/Servicemain/Servicemain1'
import Reliabilityservice from '../components/Servicemain/Reliabilityservice'
import Footer from '../components/common/Footer'

class ReliabilityService extends Component {
    render() {
        return (
            <Layout>
              <>
                    <Servicemain1/>
                    <Reliabilityservice/>
                    <Footer/>
              </>
            </Layout>
        )
    }
}
export default ReliabilityService