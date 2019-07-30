import React from 'react';
import Avatar from './Avatar'

const Sidebar = ()=> {
    return (
   <aside className="site-sidebar">
     <div className="site-sidebar-inner">
       <Avatar />
       <nav className="block main-navigation">
           <div className="navigation-extend-bar">
               <div className="social-icons">
                   <a href="mailto:qusai.alfaki@gmail.com"
                     className="button button-icon" title="mail: qusai.alfaki@gmail.com">
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
               <a href="#" className="navigation-extend-button js-extend-main-navigation">
                   <i className="fa fa-bars"></i>
               </a>
           </div>
           <div className="navigation-extendable">
               <ul className="side-nav">
                   <li className=""><a href="#portfolio">Portfolio</a></li>
                   <li className=""><a href="#skills">services</a></li>
                   <li className=""><a href="#contact">Contact me</a></li>
               </ul>
               <ul className="side-nav">
                 <li className=""><a href="resume.pdf">resume</a></li>
                 <li className=""><a href="#talk">My talks</a></li>
                 <li><a href="https://medium.com/@qusai.alfaki" target="_blank">Personal blog</a></li>
               </ul>
         </div>
       </nav>
       <div className="block block-social">
           <div className="block-title">Get in touch</div>
           <div className="block-content">
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
         </div>
       </div>
     </div>
   </aside>
    )
}

export default Sidebar
