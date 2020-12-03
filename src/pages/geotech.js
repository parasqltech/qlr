import React, {Component} from 'react';
import Layout from '../components/Layout'
import Servicemain1 from '../components/Servicemain/Servicemain1'
import Geotech from '../components/Servicemain/Geotech'
import Footer from '../components/common/Footer'

class GeotechService extends Component {
    render() {
        return (
            <Layout>
              <>
                    <Servicemain1/>
                    <Geotech/>
                    <Footer/>
              </>
            </Layout>
        )
    }
}
export default GeotechService