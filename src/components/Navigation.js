import React from "react";
import { Link } from 'react-router-dom'
const Navigation = ()=> {
    const [toggled, setToggle] = React.useState(false);
    // <li><a href="https://medium.com/@qusai.alfaki" target="_blank">Personal blog</a></li>
    return (
        <nav className={toggled ? 'main-navigation extended': 'block main-navigation'}>
            <div className="navigation-extend-bar">
                <div className="social-icons">
                      <a href="mailto:qusai.alfaki@gmail.com" className="button button-icon" title="mail: qusai.alfaki@gmail.com">
                        <i className="fa fa-envelope"></i>
                      </a>
                      <a href="https://www.linkedin.com/in/qalfaki" className="button button-icon" title="linkedin: Qusai">
                          <i className="fa fa-linkedin-square"></i>
                      </a>
                      <a href="https://github.com/512B" className="button button-icon" title="github: Qusai">
                          <i className="fa fa-github-square"></i>
                      </a>
                      <a href="https://twitter.com/QAlfaki" className="button button-icon" title="twitter: @QAlfaki">
                          <i className="fa fa-twitter-square"></i>
                      </a>
                </div>
                <span onClick={()=> setToggle(!toggled)} className="navigation-extend-button js-extend-main-navigation">
                    <i className="fa fa-bars"></i>
                </span>
              </div>
              <div className="navigation-extendable">
                  <ul className="side-nav">
                      <li className=""><Link to='/portfolio'>Portfolio</Link></li>
                      <li className=""><Link to='/skills'>Skills</Link></li>
                      <li className=""><Link to='/contact'>Contacts</Link></li>
                  </ul>
                  <ul className="side-nav">
                  </ul>
            </div>
        </nav>
    )
}

export default Navigation
