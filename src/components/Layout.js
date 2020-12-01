import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/common/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import './all.scss'
import favicon from '../images/favicon.png';


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="QL-Resources" link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]} />
    <Helmet>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
   
    </Helmet>
    <Header/>
      <div>{children}</div>
  </div>
)

export default TemplateWrapper

