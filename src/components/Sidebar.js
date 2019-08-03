import React from 'react';
import Avatar from './Avatar';
import Navigation from './Navigation';
import Socialmedia from './Socialmedia';

const Sidebar = (props)=> {
    return (
   <aside className="site-sidebar">
     <div className="site-sidebar-inner">
       <Avatar />
       <Navigation/>
       <Socialmedia />
     </div>
   </aside>
    )
}

export default Sidebar
