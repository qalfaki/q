import React from "react";

const Socialmedia = ()=> {
    return (
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
    )
}

export default Socialmedia