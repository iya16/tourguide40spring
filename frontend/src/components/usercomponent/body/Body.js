import React, { Component } from 'react'
import Header from './../header/Header';
import Slide from './silde/Slide';
import TestiMonials from './TestiMonials';
import Card from './Card';
 import Footer from './../footer/Footer';
 import './body.css'
 class Body extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Slide/>
        <Card></Card>
        <TestiMonials></TestiMonials>
        <Footer></Footer>
      </div>
    )
  }
}
export default Body;
