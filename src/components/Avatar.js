import React from "react";

const Avatar = ()=> {
    return (
       <a href="/" className="person">
         <div className="person-avatar">
           <img src="../assets/imgs/avatar.5.png" alt="" className="avatar"/>
         </div>
         <div className="person-content">
           <h1 className="person-title">Qusai Alfaki</h1>
           <h2 className="person-subtitle">Full-stack Web developer</h2>
         </div>
       </a>
    )
}
export default Avatar
