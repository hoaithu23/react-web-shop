import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Routes from '../routes/Routes'
import ProductViewModel from './ProductViewModel'

import { BrowserRouter, Route} from 'react-router-dom'

const Layout = () => {
  return (
    <BrowserRouter>
      <Route render={props => (
        <div>
            <Header {...props}/>
            <div className='container'>
                <div className='main'>
                  <Routes/>
                </div>
            </div>
            <Footer/>
            <ProductViewModel />
        </div>
      )}/>
    </BrowserRouter>
  )
}

export default Layout