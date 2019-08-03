import React from "react";
import { Link } from 'react-router-dom'

const Home = ()=> {
    return (
       	<div className="home-section">
        	<div className="home-section-inner">
                <div className="home-heading"> Hi, I'm Qusai, </div>
                    <h2 className="home-subheading">
                        a web developer specialized&nbsp;in<br></br>
                        <strong>front-end and back-end web development</strong>.
                    </h2>
                    <div className="home-location">
                        Currently located in <span className="location-name">
                        <i className="fa fa-map-marker"></i> Nairobi, Kenya</span>.
                    </div>
                    <div className="home-buttons">
                        <Link replace to="/portfolio" className="button button-outline button-white">Portfolio</Link><br></br>
                        <Link replace to="/skills" className="button button-outline button-white">offered services</Link>
                    </div>
                </div>
            </div>
    )
}

export default Home
