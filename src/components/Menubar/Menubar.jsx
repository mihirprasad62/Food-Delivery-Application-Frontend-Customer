import React from 'react'
import "./menubar.css"
import {assets} from "../../assets/assets"
import { Link } from 'react-router-dom'



const Menubar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#"><img src={assets.logo} alt=""  /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/explore">Explore</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/contact">Contact us</Link>
        </li>
      </ul>
      <div className='cart'>
        <img src={assets.bag_icon} alt="" />
        <span className='counter'>5</span>
      </div>

      <button className='btn btn-outline-primary mx-4'>Login</button>
       <button className='btn btn-outline-success'>Register</button>
    </div>
  </div>
</nav>
    </>
  )
}

export default Menubar