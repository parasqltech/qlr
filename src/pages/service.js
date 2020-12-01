import React, {Component} from 'react';
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Servicesection1 from '../components/Service/Servicesection1'
import Servicesection2 from '../components/Service/Servicesection2'
import Servicesection3 from '../components/Service/Servicesection3'
import Servicesection4 from '../components/Service/Servicesection4'
import Testimonialsection from '../components/Home/Testimonial-section'
import Servicesection5 from '../components/Service/Servicesection5'
import Servicesection6 from '../components/Service/Servicesection6'
import Themesection from '../components/common/Theme-section'
import Footer from '../components/common/Footer'

class Service extends Component {
    render() {
        return (
            <Layout>
              <>
                    <Servicesection1/>
                    <Servicesection2/>
                    <Servicesection3/>
                    <Servicesection4/>
                    <Testimonialsection/>
                    <Servicesection5/>
                    <Servicesection6/>
                    <Themesection/>
                    <Footer/>
              </>
            </Layout>
        )
    }
}
export default Service