import React, {Component} from 'react';
import Layout from '../components/Layout'
import Servicemain1 from '../components/Servicemain/Servicemain1'
import Digitalservice from '../components/Servicemain/Digitalservice'
import Footer from '../components/common/Footer'

class DigitalService extends Component {
    render() {
        return (
            <Layout>
              <>
                    <Servicemain1/>
                    <Digitalservice/>
                    <Footer/>
              </>
            </Layout>
        )
    }
}
export default DigitalService