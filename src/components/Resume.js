import React from "react";
import avatarImgSrc from '../assets/imgs/avatar.5.png'

const Resume = (props)=> {
    setTimeout(()=>{document.getElementsByClassName('App')[0].classList.add('hidden')}, 0)
    return (
    	<div className="cv">
    		<div className="cv-page">
  				<div className="cv-page-inner">
    				<div className="cv-section cv-header">
      					<div className="cv-header-avatar">
        					<img src={avatarImgSrc} alt="N/A"/>
      					</div>
      					<div className="cv-header-text">
        					<h1 className="cv-header-name">Qusai Alfaki</h1>
        					<h2 className="cv-header-subname">Full-stack Web Developer</h2>
        					<div className="cv-header-lead">
        						Self-motivated software developer with over four years of professional experience in coding, launching and teaching others.<br/><br/>
          						<strong>Currently available.</strong><br/>Willing to relocate to: USA, Australia, Europe, or can work remotely.
       						 </div>
      					</div>
      					<div className="cv-header-meta">
        					<div className="cv-header-meta-right">
          						<div className="cv-header-meta-row">
            						<a href="mailto:qusai.alfaki@gmail.com" rel="noopener noreferrer">qusai.alfaki@gmail.com</a>
          						</div>
          						<div className="cv-header-meta-row">
            						+254 726348332
          						</div>
          						<div className="cv-header-meta-row">
            						<a href="qalfaki.github.io" rel="noopener noreferrer">qalfaki.github.io</a>
          						</div>
        					</div>
      					</div>
    				</div>
    				<div className="cv-section">
                <h3 className="cv-section-title">Experience</h3>
                    <div className="cv-section-content">
        				        <div className="cv-timeline">
                            <div className="cv-timeline-row">
            						        <div className="cv-timeline-side">
                                    <div className="cv-timeline-company">Lynk</div>
                                    <div className="cv-timeline-date">09/2016 - current</div>
                                    <a href="https://lynk.co.ke" rel="noopener noreferrer">Lynk.co.ke</a>
                                </div>
            						        <div className="cv-timeline-body">
                                    <h4 className="cv-timeline-position">Full-stack Web Developer</h4>
                                    <p>Developed new web applications for managing large volums of data,  backend to frontend and deployment.</p>
                                    <ul>
                                        <li>Bootstrapped, co-developed and leaded most of the decisions during the initial phase of the project.</li>
                                        <li>refactored badly implemented applications/features.</li>
                                        <li>Developed a full-text search using postgresql, with various filters and a custom suggestion system based on the user's query</li>
                                        <li>Introduced code style guidlines, directory structure and formats.</li>
                                    </ul>
                                </div>
						                </div>
                        </div>
                    </div>
                    <div className="cv-section-content">
                        <div className="cv-timeline">
                            <div className="cv-timeline-row">
                                <div className="cv-timeline-side">
                                    <div className="cv-timeline-company">Moringa school</div>
                                    <div className="cv-timeline-date">09/2016 - 2016</div>
                                    <a href="https://moringaschool.com/" rel="noopener noreferrer">Moringa school</a>
                                </div>
                                <div className="cv-timeline-body">
                                    <h4 className="cv-timeline-position">mobile & Web Developer</h4>
                                    <p>I worked on various projects including android mobile applications and web applications using latest technologies</p>
                                    <ul>
                                        <li>Developed a responsive front-end web applications in Django with multiple user access levels</li>
                                        <li>Developed/co-developed and launched multiple android applications, participating in the whole process of their development: android and back-end programming, UI/UX design, </li>
                                        <li>Wrote automatic synchronizations with remote APIs, that e.g. parse user's data, music ganres.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
				        <div className="cv-section">
                    <h3 className="cv-section-title">Skills</h3>
                    <div className="cv-section-content cv-section-content--indented">
                        <ul className="cv-tech-tags tech-tags">
                                            <li><a rel="nofollow" target="_blank">Elixir</a></li>
                                            <li><a rel="nofollow" target="_blank">TypeScript</a></li>
                                            <li><a rel="nofollow" target="_blank">SQL</a></li>
                                            <li><a rel="nofollow" target="_blank">JavaScript</a></li>
                                            <li><a rel="nofollow" target="_blank">Python</a></li>
                                            <li><a rel="nofollow" target="_blank">Django</a></li>
                                            <li><a rel="nofollow" target="_blank">Flask</a></li>
                                            <li><a rel="nofollow" target="_blank">Falcon framework</a></li>
                                            <li><a rel="nofollow" target="_blank">sqlAlchemy</a></li>
                                            <li><a rel="nofollow" target="_blank">postgresql</a></li>
                                            <li><a rel="nofollow" target="_blank">Vuejs</a></li>
                                            <li><a rel="nofollow" target="_blank">Vuex</a></li>
                                            <li><a rel="nofollow" target="_blank">React</a></li>
                                            <li><a rel="nofollow" target="_blank">React Hooks</a></li>
                                            <li><a rel="nofollow" target="_blank">Redux</a></li>
                                            <li><a rel="nofollow" target="_blank">Celery</a></li>
                                            <li><a rel="nofollow" target="_blank">Redis</a></li>
                                            <li><a rel="nofollow" target="_blank">RabbitMQ</a></li>
                                            <li><a rel="nofollow" target="_blank">DDD</a></li>
                                            <li><a rel="nofollow" target="_blank">Microservices</a></li>
                                            <li><a rel="nofollow" target="_blank">Phoenix Framework</a></li>
                                            <li><a rel="nofollow" target="_blank">Algorithms</a></li>
                                            <li><a rel="nofollow" target="_blank">Android</a></li>
                                            <li><a rel="nofollow" target="_blank">java</a></li>
                                            <li><a rel="nofollow" target="_blank">Unit / E2E Testing</a></li>
                                            <li><a rel="nofollow" target="_blank">Project estimation</a></li>
                                            <li><a rel="nofollow" target="_blank">Mentor &amp; Leader</a></li>
                                        </ul>
                                      </div>
                                    </div>

                                    <div className="cv-section">
                                      <h3 className="cv-section-title">Education</h3>
                                      <div className="cv-section-content">
                                        <div className="cv-timeline">
                                          <div className="cv-timeline-row">
                                            <div className="cv-timeline-side">
                                              <div className="cv-timeline-company">Moringa school</div>
                                              <div className="cv-timeline-date">2016 - 2016</div>
                                              <a href="https://moringaschool.com/" rel="noopener noreferrer">Moringa school</a>
                                            </div>
                                            <div className="cv-timeline-body">
                                              <div className="cv-timeline-position">Web development</div>
                                              <ul>
                                                <li>
                                                    deep dive into web development using latest technologies, <a rel="noopener noreferrer" href="https://www.postgresql.org/" target="_blank">Postgresql</a>, <a rel="noopener noreferrer" href="https://www.djangoproject.com/" target="_blank">Django</a>, <a rel="noopener noreferrer" href="https://www.sqlalchemy.org/" target="_blank">sqlAlchemy</a> agile methodology (scrum), version control (git), UX/UI research, teamwork and colaboration                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      
                                      <div className="cv-section-content">
                                        <div className="cv-timeline">
                                          <div className="cv-timeline-row">
                                            <div className="cv-timeline-side">
                                              <div className="cv-timeline-company">Atid college</div>
                                              <div className="cv-timeline-date">2013 - 2013</div>
                                              <a rel="noopener noreferrer" href="https://www.microsoft.com/en-us/learning/certification-overview.aspx">Microsoft</a>
                                            </div>
                                            <div className="cv-timeline-body">
                                              <div className="cv-timeline-position">Microsoft MCTS certified</div>
                                              <ul>
                                                <li>course material included technologies, such as the Windows operating system, Microsoft Exchange Server, Microsoft SQL Server, or Microsoft Visual Studio
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="cv-section-content">
                                        <div className="cv-timeline">
                                          <div className="cv-timeline-row">
                                            <div className="cv-timeline-side">
                                              <div className="cv-timeline-company">Kfar Hayarok college of Technology</div>
                                              <div className="cv-timeline-date">2010 - 2012</div>
                                              <a rel="noopener noreferrer" href="http://www.kfaryarok.org.il/en">Kfar Hayarok college</a>
                                            </div>
                                            <div className="cv-timeline-body">
                                              <div className="cv-timeline-position">Diploma in Michanical Engineering</div>
                                              <ul>
                                                <li>Worked on various projects involved Hydraulics and Thermodynamics systems, including computerized system diagnoses and software contribution to michanics workflow</li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="cv-section">
                                      <h3 className="cv-section-title">Other perks</h3>
                                      <div className="cv-section-content cv-section-content--indented">
                                        <ul>
                                          <li>Volunteered as a photographer in <a rel="noopener noreferrer" href="https://issuu.com/refugeevoice/docs/the.refugee.voice" target="_blank">"The refugee voice"</a> news paper Tel aviv Israel.</li>
                                          <li>Received "The Best Graduate" award upon graduating the high school, thanks to multiple achievements in
                                            mathematics, history and literature.</li>
                                          <li>In his free time, likes to draw,
                                            play soccer, and travel.</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
          )
}

export default Resume
