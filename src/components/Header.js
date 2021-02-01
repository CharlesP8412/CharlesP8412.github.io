import React from 'react'
import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>Chuck Prystupa</strong>
        <br />
        Full stack developer&nbsp;
        <br />
        Jack of all trades&nbsp;
        <br />
        Veteran&nbsp;
        <br />
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
