import React from 'react'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'

import 
{ 
  Switch, 
  Route 
} from 'react-router-dom';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/catalog/:slug' component={Product}/>
      <Route path='/catalog' component={Catalog}/>
      <Route path='/cart' component={Cart}/>
    </Switch>
  )
}

export default Routes