import React from 'react';
import avatarImgSrc from '../assets/imgs/avatar.5.jpg'
import { Link } from 'react-router-dom';
const Avatar = ()=> {
    return (
        <Link replace to="/" className="person">
            <div className="person-avatar">
                <img src={avatarImgSrc} alt="" className="avatar"/>
            </div>
            <div className="person-content">
                <h1 className="person-title">Qusai Alfaki</h1>
                <h2 className="person-subtitle">Software Engineer</h2>
            </div>
      </Link>
    )
}

export default Avatar
