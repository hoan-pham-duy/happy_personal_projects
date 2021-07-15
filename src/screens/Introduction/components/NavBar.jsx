import React from 'react'

import './../static/css/styles.css'
import './../static/css/Homepage.css'
import './../ui_theme/freelancer/css/bootstrap.min.css'
import './../ui_theme/freelancer/css/freelancer.css'

class NavBar extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-default">
          <div className="container">
              <div className="navbar-header page-scroll">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#page-top">Start Bootstrap</a>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-right">
                      <li className="hidden">
                          <a href="#page-top"></a>
                      </li>
                      <li className="page-scroll">
                          <a href="#portfolio">Portfolio</a>
                      </li>
                      <li className="page-scroll">
                          <a href="#about">About</a>
                      </li>
                      <li className="page-scroll">
                          <a href="#contact">Contact</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    )
  }
}

export default NavBar
