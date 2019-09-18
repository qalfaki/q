import React from 'react';
import { Link } from 'react-router-dom';
import tsunami from '../assets/imgs/Tsunami.png';
import elitedesigns from '../assets/imgs/Elite.png';
import kibanda from '../assets/imgs/kibanda.png';
import lynkImg from '../assets/imgs/lynk.png';
import qube from '../assets/imgs/qube.png';
import angerComics from '../assets/imgs/angerCmics.png';

const Portfolio = ()=> {
    setTimeout(()=>{document.getElementsByClassName('App')[0].classList.remove('hidden')}, 0);
    return (
    	<div className="main-section portfolio-section">
        	<h1 className="main-title">Portfolio</h1>
            <p>See my works below. Unless explicitly stated otherwise, <strong>all their back-end and front-end parts were completely done by me. </strong>
            </p>
            <div className="timeline portfolio-timeline">
                <ul>
                    <li className="timeline_element timeline_element--now project">
                        <div className="timeline_element-date">
                            <time className="timeline_element-date-text">Now</time>
                        </div>
                        <div className="timeline_element-contents">
                            <div className="project-text">
                                <div className="project-description">
                                    <strong>Currently open to co-operation on new and existing projects.</strong><br></br>
                                        Looking for a freelancer or part/full time full-stack dev willing to join your team?<br></br>
                                    <Link to="/contact">Contact me</Link>. I will answer you in ~24 hours.
                                 </div>
                            </div>
                        </div>
                    </li>
                    <li className="timeline_element project">
                        <div className="timeline_element-date">
                            <time className="timeline_element-date-text">2019-2019</time>
                        </div>
                        <div className="timeline_element-contents">
                            <div className="project-text">
                                <a href="https://qube-d0bc0.firebaseapp.com" className="project-link">
                                    <div className="project-title">Qube notes</div>
                                        <div className="project-subtitle">slick and user friendly web application for taking notes/to-do lists</div>
                                </a>
                                <div className="project-description"><p><strong>Designed using Figma with simplicity & minimalism in mind</strong></p>

                                    <ul>
                                        <li>UI/UX built using react functional components, builtin hooks and custom hooks for relatively more complex functionaility like validation etc.</li>
                                        <li>Integrates standard key bindings eg. <code>CTRL+s</code> for saving</li>
                                        <li>full support for user authentication using firebase auth API</li>

                                    </ul>
                                </div>
                                <div className="project-technologies">
                                    <div  className="technologies-title">Technologies</div>
                                        <ul className="tech-tags">
                                            <li><a href="https://reactjs.org/" rel="nofollow" rel="noopener" target="_blank">React</a></li>
                                            <li><a href="https://reactjs.org/docs/hooks-reference.html" rel="nofollow" rel="noopener" target="_blank">React hooks</a></li>  
                                            <li><a href="https://www.figma.com/files" rel="nofollow" rel="noopener" target="_blank">Figma</a></li>
                                            <li><a href="https://firebase.google.com/" rel="nofollow" rel="noopener" target="_blank">firebase</a></li>                                                        
                                        </ul>
                                    </div>
                                </div>
                                <div className="project-image"> <a href="https://qube-d0bc0.firebaseapp.com">
                                    <img src={qube} alt="N/A"/>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="timeline_element project">
                        <div className="timeline_element-date">
                            <time className="timeline_element-date-text">2018-2019</time>
                        </div>
                        <div className="timeline_element-contents">
                            <div className="project-text">
                                <a href="https://lynk.co.ke" className="project-link">
                                    <div className="project-title">filter/search API</div>
                                        <div className="project-subtitle">very efficient search API, that look through large volums of data based on search query</div>
                                </a>
                                <div className="project-description"><p><strong>the API designed to expect high traffic, and follows database speed optimizing querys best practices and convencions </strong></p>

                                    <ul>
                                          <li>an online platform that partners with Kenyan artisans to showcase and promote their products and services</li>
                                    </ul>
                                </div>
                                <div className="project-technologies">
                                    <div  className="technologies-title">Technologies</div>
                                        <ul className="tech-tags">
                                            <li><a href="https://vuejs.org" rel="nofollow" rel="noopener" target="_blank">vuejs</a></li>
                                            <li><a href="https://vuex.vuejs.org/" rel="nofollow" rel="noopener" target="_blank">vuex</a></li>
                                            <li><a href="https://getbootstrap.com/" rel="nofollow" rel="noopener" target="_blank">bootstrap</a></li>
                                            <li><a href="https://www.postgresql.org/" rel="nofollow" rel="noopener" target="_blank">postgresql</a></li>
                                            <li><a href="https://www.python.org/" rel="nofollow" rel="noopener" target="_blank">python</a></li>                                                                          
                                    	</ul>
                                  	</div>
                            	</div>
                            	<div className="project-image"> <a href="lynk.co.ke">
                                	<img src={lynkImg} alt="N/A"/>
                              	</a>
                            </div>
                        </div>
                    </li>
                    <li className="timeline_element project">
                        <div className="timeline_element-date">
                            <time className="timeline_element-date-text">2016-2017</time>
                        </div>
                        <div className="timeline_element-contents">
                            <div className="project-text">
                                <a href="#" className="project-link">
                                    <div className="project-title">Elite designs</div>
                                        <div className="project-subtitle">Interior designs</div>
                                </a>
                                <div
                                    className="project-description"><p><strong>
                                    design agency web application, includes contact form and portfolio section:</strong></p>
                                    <ul>
                                          <li>
                                                Responsive web application
                                                (jQuery, fundation zurb)
                                          </li>
                                    </ul>
                                </div>
                                <div className="project-technologies">
                                    <div  className="technologies-title">Technologies</div>
                                        <ul className="tech-tags">
                                            <li><a href="https://foundation.zurb.com/" rel="nofollow" rel="noopener" target="_blank">Foundation zurb</a></li>
                                            <li><a href="https://jquery.com/" rel="nofollow" rel="noopener" target="_blank">jQuery</a></li>
                                            <li><a href="https://cloud.google.com/maps-platform/" rel="nofollow" rel="noopener" target="_blank">google maps api</a></li>

                                    </ul>
                                  </div>
                            </div>
                            <div className="project-image">
                                <a href="https://yvonnendutaw.github.io/Elite-Designs/" rel="noopener" target="_blank">
                                    <img src={elitedesigns} alt="N/A"/>
                                </a>
                            </div>
                        </div>
                    </li>

                      <li className="timeline_element project">
                        <div className="timeline_element-date">
                            <time className="timeline_element-date-text">2016-2017</time>
                        </div>
                        <div className="timeline_element-contents">
                            <div className="project-text">
                                <a href="#" className="project-link">
                                    <div className="project-title">Kibanda</div>
                                        <div className="project-subtitle">Mobile app for finding nearby restaurants (kibanda means mini restaurant or cafe in the local langauge)</div>
                                </a>
                                <div
                                    className="project-description"><p><strong>
                                        restaurants version of the app, </strong></p>
                                    <ul>
                                        <li>the restaurants owners have the ability to update the menu add spcial dishes, discounds and offers</li>
                                        <li>end-customers will be able to easly locat affordable nearby restaurants view the menu and .</li>
                                    </ul>
                                </div>

                                <div className="project-technologies">
                                    <div  className="technologies-title">Technologies</div>
                                        <ul className="tech-tags">
                                            <li><a rel="nofollow" rel="noopener" target="_blank">UI/ux</a></li>
                                            <li><a href="https://sqlite.org/index.html" rel="nofollow" rel="noopener" target="_blank">sqllit3</a></li>
                                            <li><a rel="nofollow" rel="noopener" target="_blank">android</a></li>
                                            <li><a href="https://firebase.google.com/" rel="nofollow" rel="noopener" target="_blank">firebase</a></li>
                                    </ul>
                                  </div>
                            </div>
                            <div className="project-image">
                                <a href="http://bit.ly/2a0XhSr" rel="noopener" target="_blank">
                                    <img src={kibanda} alt="N/A"/>
                                </a>
                            </div>
                        </div>
                    </li>

                    <li className="timeline_element project">
                        <div className="timeline_element-date">
                            <time className="timeline_element-date-text">2016-2017</time>
                        </div>
                        <div className="timeline_element-contents">
                            <div className="project-text">
                                <a href="#" className="project-link">
                                    <div className="project-title">Tsunami</div>
                                        <div className="project-subtitle">Music & art festival</div>
                                </a>
                                <div
                                    className="project-description"><p><strong>
                                        demonstration of properly structured
                                        site for better SEO & UI/UX.
                                        Web platform for booking festival tickets:</strong></p>
                                    <ul>
                                          <li>
                                                Responsive web application
                                                (jQuery, fundation zurb)
                                          </li>
                                            <li>a platform for end-customers to
                                                book festival tickets and
                                                learn about the various activities while or before the travelling.</li>
                                    </ul>
                                </div>

                                <div className="project-technologies">
                                    <div  className="technologies-title">Technologies</div>
                                        <ul className="tech-tags">
                                            <li><a href="https://foundation.zurb.com/" rel="nofollow" rel="noopener" target="_blank">Foundation zurb</a></li>
                                            <li><a href="https://jquery.com/" rel="nofollow" rel="noopener" target="_blank">jQuery</a></li>
                                            <li><a href="https://cloud.google.com/maps-platform/" rel="nofollow" rel="noopener" target="_blank">google maps api</a></li>
                                    </ul>
                                  </div>
                            </div>
                            <div className="project-image">
                                <a href="http://syntaxsizer.github.io/tsunami">
                                    <img src={tsunami} alt="http://syntaxsizer.github.io/tsunami"/>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="timeline_element project">
                        <div className="timeline_element-date">
                            <time className="timeline_element-date-text">2016-2017</time>
                        </div>
                        <div className="timeline_element-contents">
                            <div className="project-text">
                                <a href="#" className="project-link">
                                    <div className="project-title">Anger comics</div>
                                        <div className="project-subtitle">fun mobile application</div>
                                </a>
                                <div
                                    className="project-description"><p><strong>
                                    fragments implementation, the app provides information about the funny characters we see all over the social media and memes
                                    it also give information  about character names and origins
                                        </strong></p>
                                    <ul>
                                        <li>the application consist of one activity and many fragments each fragment represent a character, think of characters as different contexts, separation of concerns</li>
                                        <li>the application consumes a public API, that provides the characters information</li>
                                    </ul>
                                </div>

                                <div className="project-technologies">
                                    <div  className="technologies-title">Technologies</div>
                                        <ul className="tech-tags">
                                          <li><a rel="nofollow" rel="noopener" target="_blank">UI/ux</a></li>
                                            <li><a href="https://sqlite.org/index.html" rel="nofollow" rel="noopener" target="_blank">sqllit3</a></li>
                                            <li><a rel="nofollow" rel="noopener" target="_blank">android fragments</a></li>
                                            <li><a rel="nofollow" rel="noopener" target="_blank">android</a></li>
                                       </ul>
                                  </div>
                            </div>
                            <div className="project-image">
                                <a rel="nofollow">
                                    <img src={angerComics} alt="N/A"/>
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Portfolio
