import React, {Component} from 'react';
import Layout from '../components/Layout'
import Servicemain1 from '../components/Servicemain/Servicemain1'
import Systemservice from '../components/Servicemain/Systemservice'
import Footer from '../components/common/Footer'

class SystemService extends Component {
    render() {
        return (
            <Layout>
              <>
                    <Servicemain1/>
                    <Systemservice/>
                    <Footer/>
              </>
            </Layout>
        )
    }
}
export default SystemService