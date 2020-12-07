import React, {Component} from 'react';
import Layout from '../components/Layout'
import Miningmain1 from '../components/Servicemain/Miningmain1'
import Miningservice from '../components/Servicemain/Miningservice'
import Footer from '../components/common/Footer'

class MiningService extends Component {
    render() {
        return (
            <Layout>
              <>
                    <Miningmain1/>
                    <Miningservice/>
                    <Footer/>
              </>
            </Layout>
        )
    }
}
export default MiningService