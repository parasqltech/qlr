import React, {Component} from 'react';
import Layout from '../components/Layout'
import Reliabilitymain1 from '../components/Servicemain/Reliabilitymain1'
import Reliabilityservice from '../components/Servicemain/Reliabilityservice'
import Footer from '../components/common/Footer'

class ReliabilityService extends Component {
    render() {
        return (
            <Layout>
              <>
                    <Reliabilitymain1/>
                    <Reliabilityservice/>
                    <Footer/>
              </>
            </Layout>
        )
    }
}
export default ReliabilityService