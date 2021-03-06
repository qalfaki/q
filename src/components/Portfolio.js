import React from 'react';
import { Link } from 'react-router-dom';
import tsunami from '../assets/imgs/Tsunami.png';
import elitedesigns from '../assets/imgs/Elite.png';
import kibanda from '../assets/imgs/kibanda.png';
import lynkImg from '../assets/imgs/lynk.png';
import calendar from '../assets/imgs/pro-calendar.png';
import ayazona from '../assets/imgs/ayazona.png';
import qube from '../assets/imgs/qube.png';
import zeftt from '../assets/imgs/zeftt.png';
import angerComics from '../assets/imgs/angerCmics.png';

const Portfolio = ()=> {
    return (
    	<div className="main-section portfolio-section">
        	<h1 className="main-title">Portfolio</h1>
            <p>See my works below. Unless explicitly stated otherwise, <strong>most of their back-end and front-end parts were completely done by me. </strong>
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
                                        Looking for a freelancer or part/full time software engineer willing to join your team?<br></br>
                                    <Link to="/contact">Contact me</Link>. I will answer you in ~24 hours.
                                 </div>
                            </div>
                        </div>
                    </li>
                    <li className="timeline_element project">
                        <div className="timeline_element-date">
                            <time className="timeline_element-date-text">2020-2020</time>
                        </div>
                        <div className="timeline_element-contents">
                            <div className="project-text">
                                <a href="https://zeftt.com" className="project-link">
                                    <div className="project-title">ZEFTT rides</div>
                                        <div className="project-subtitle">Running late to work? We got you, download ZEFTT and co-share a ride with your friends.</div>
                                </a>
                                <div className="project-description">
                                    <p><strong>built with react native</strong></p>
                                    <ul>
                                        <li>create and share rides with your friends</li>
                                        <li>smooth and easy to use process</li>
                                        <li>slick and modren UI/UX</li>
                                    </ul>
                                </div>
                                <div className="project-technologies">
                                    <div  className="technologies-title">Technologies</div>
                                        <ul className="tech-tags">
                                            <li><a href="https://nextjs.org/" rel="nofollow" rel="noopener" target="_blank">react native</a></li>
                                            <li><a href="https://redux.js.org/" rel="nofollow" rel="noopener" target="_blank">Redux</a></li>
                                            <li><a href="https://styled-components.com/" rel="nofollow" rel="noopener" target="_blank">expo</a></li>
                                            <li><a href="https://www.figma.com/files" rel="nofollow" rel="noopener" target="_blank">Figma</a></li>
                                            <li><a href="https://firebase.google.com/" rel="nofollow" rel="noopener" target="_blank">firebase</a></li>    
                                            <li><a href="https://styled-components.com/" rel="nofollow" rel="noopener" target="_blank">Python</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="project-image"> <a href="https://zeftt.com/">
                                    <img src={zeftt} alt="N/A"/>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="timeline_element project">
                        <div className="timeline_element-date">
                            <time className="timeline_element-date-text">2020-2020</time>
                        </div>
                        <div className="timeline_element-contents">
                            <div className="project-text">
                                <a href="https://staging.ayazona.com/" className="project-link">
                                    <div className="project-title">Ayazona</div>
                                        <div className="project-subtitle">Discover and Get Affordable Great Food Delivered</div>
                                </a>
                                <div className="project-description"><p><strong>built using nextjs for high availablity and great SEO</strong></p>

                                    <ul>
                                        <li>explore restaurants and cafes in your area</li>
                                        <li>Order a delivery or a pickup</li>
                                    </ul>
                                </div>
                                <div className="project-technologies">
                                    <div  className="technologies-title">Technologies</div>
                                        <ul className="tech-tags">
                                            <li><a href="https://nextjs.org/" rel="nofollow" rel="noopener" target="_blank">Nextjs</a></li>
                                            <li><a href="https://redux.js.org/" rel="nofollow" rel="noopener" target="_blank">Redux</a></li>
                                            <li><a href="https://styled-components.com/" rel="nofollow" rel="noopener" target="_blank">styled-components</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="project-image"> <a href="https://staging.ayazona.com/">
                                    <img src={ayazona} alt="N/A"/>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="timeline_element project">
                        <div className="timeline_element-date">
                            <time className="timeline_element-date-text">2020-2020</time>
                        </div>
                        <div className="timeline_element-contents">
                            <div className="project-text">
                                <a className="project-link">
                                    <div className="project-title">Realtime Personal calendar</div>
                                        <div className="project-subtitle">calendar interface for managing time and day to day engagements, an account can be used by multiple users. the realtime is used keep the data in sync and maintain data integrity</div>
                                </a>
                                <div className="project-description"><p><strong>a calendar library built in a modular fashion for ease of integration and maintainability</strong></p>
                                </div>
                                <div className="project-technologies">
                                    <div  className="technologies-title">Technologies</div>
                                        <ul className="tech-tags">
                                            <li><a href="https://nodejs.org/en/docs/" rel="nofollow" rel="noopener" target="_blank">Python</a></li>
                                            <li><a href="https://reactjs.org/docs/hooks-reference.html" rel="nofollow" rel="noopener" target="_blank">Vuex</a></li>
                                            <li><a href="https://reactjs.org/docs/hooks-reference.html" rel="nofollow" rel="noopener" target="_blank">Vuejs</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="project-image"> <a>
                                    <img src={calendar} alt="N/A"/>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="timeline_element project">
                        <div className="timeline_element-date">
                            <time className="timeline_element-date-text">2019-2019</time>
                        </div>
                        <div className="timeline_element-contents">
                            <div className="project-text">
                                <a href="https://github.com/qalfaki/lru-cache" className="project-link">
                                    <div className="project-title">Distributed LRU cache</div>
                                        <div className="project-subtitle">realtime read/write distibuted least recently used cache</div>
                                </a>
                                <div className="project-description"><p><strong>Designed and implemented using queues and doble-linked list data structure for faster lookup operations with simplicity & maintainability in mind</strong></p>

                                    <ul>
                                        <li>Instances will sync data via the AMQP server published changes</li>
                                        <li>Near realtime read/write functionality</li>
                                        <li>Cache can expire</li>
                                    </ul>
                                </div>
                                <div className="project-technologies">
                                    <div  className="technologies-title">Technologies</div>
                                        <ul className="tech-tags">
                                            <li><a href="https://nodejs.org/en/docs/" rel="nofollow" rel="noopener" target="_blank">Nextjs</a></li>
                                            <li><a href="https://reactjs.org/docs/hooks-reference.html" rel="nofollow" rel="noopener" target="_blank">styled-components</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="project-image"> <a href="https://github.com/qalfaki/lru-cache">
                                    <img src="https://camo.githubusercontent.com/8d6197aa1cc26b5c7d67b686cd3a30a36c1651e6/68747470733a2f2f692e706f7374696d672e63632f5837736e386e6d772f47656f2d64697374726962757465642d6c72752d63616368652d312e706e67" alt="N/A"/>
                                </a>
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
                                    <div className="project-title">Qube Task manager</div>
                                        <div className="project-subtitle">slick and user friendly web application for taking notes/to-do lists</div>
                                </a>
                                <div className="project-description"><p><strong>Designed using Figma with simplicity & minimalism in mind</strong></p>

                                    <ul>
                                        <li>UI/UX built using react functional components, builtin hooks and custom hooks for relatively more complex functionaility like validation etc.</li>
                                        <li>Integrates standard key bindings eg. <code>CTRL+s</code> for saving</li>
                                        <li>full support for user authentication using firebase auth API</li>
                                        <li>Test account</li>
                                        <ul>
                                            <li>email: syia@qube.com</li>
                                            <li>password: testingaccount</li>
                                        </ul>
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
