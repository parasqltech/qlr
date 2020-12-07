import React, {Component} from 'react';
import Layout from '../components/Layout'
import Digitalmain1 from '../components/Servicemain/Digitalmain1'
import Digitalservice from '../components/Servicemain/Digitalservice'
import Footer from '../components/common/Footer'

class DigitalService extends Component {
    render() {
        return (
            <Layout>
              <>
                    <Digitalmain1/>
                    <Digitalservice/>
                    <Footer/>
              </>
            </Layout>
        )
    }
}
export default DigitalService