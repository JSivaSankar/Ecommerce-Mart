import React from 'react';
import Corocel from './Corocel'
import AddOn from './AddOn';
import CartDiscount from './CartDiscount';
import NewProducts from './NewProducts';
import BestSales from './BestSales';




const Home = () => {
  return (
    <div>
      <div><Corocel /></div>
      <section><AddOn /></section>
      <section><CartDiscount/></section>
      <section><NewProducts/></section>
      <section><BestSales/></section>
    </div>
  )
}

export default Home
