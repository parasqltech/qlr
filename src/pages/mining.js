import React, {Component} from 'react';
import Layout from '../components/Layout'
import Servicemain1 from '../components/Servicemain/Servicemain1'
import Miningservice from '../components/Servicemain/Miningservice'
import Footer from '../components/common/Footer'

class MiningService extends Component {
    render() {
        return (
            <Layout>
              <>
                    <Servicemain1/>
                    <Miningservice/>
                    <Footer/>
              </>
            </Layout>
        )
    }
}
export default MiningService