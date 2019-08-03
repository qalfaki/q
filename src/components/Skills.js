import React from 'react';
import { Link } from 'react-router-dom';

const Skills = ()=> {
    setTimeout(()=>{document.getElementsByClassName('App')[0].classList.remove('hidden')}, 0);
    return (
    	<div className="main-section skills-section">
    <h1 className="main-title">what can I offer you,</h1>
    <p>
      <strong>A <span className="headers">full-stack web developer</span> with over <span className="headers">4 years of experience</span>.</strong>
    </p>
    <p>
      <strong>I have maintained, developed and launched <Link replace to="/portfolio" className="nocolor">multiple projects</Link> from scratch</strong>, carrying the development of its' back-end and front-end codebases.</p>
    <p>My current toolset includes <strong>python & Django</strong> flask, sqlalchemy, Django, <strong>vuejs/vuex </strong>, Redux, backbonejs, Docker and all the other various frameworks, libraries and
    technologies related to them.</p>

    <p><strong>I can help you with all the sides of your project:</strong></p>
    <ul>
        <li>verifying good UI/UX design,</li>
        <li>leading/co-developing the back-end and front-end,</li>
        <li>setting up the CI/CD,</li>
        <li>mentoring the team,</li>
        <li>estimating tasks,</li>
        <li>researching possible techs,</li>
        <li>leading, launching and monitoring the project.</li>
  </ul>

  <p>
      <em>Call me a Swiss Army Knife in terms of web development.</em>
  </p>

  <hr></hr>

  <h2 className="headers">
      <i className="fa fa-edit"></i>
      Front-end Web development
  </h2>

  <p>
      <strong>I specialize in applications written in Vuejs, React and Backbonejs.</strong> Recently I became also a huge fan of on way data
      flow and Redux-like architecture and also typed languages, e.g.
      <a href="https://www.typescriptlang.org/"
      rel="noopener" target="_blank" rel="noopener">TypeScript</a>.
  </p>

  <p>My current experience and skills in front-end includes: </p>
  <ul>
      <li>lead TypeScript/JavaScript development: bootstraping, refactoring, improving the structure, reliability, build setup;</li>
      <li>full integration of front-end development using tools like <a href="https://webpack.js.org/"
        rel="nofollow">Webpack</a> with features like automatic code reload, code minifications, multiple environments
      support, CI/CD, Storybook components library, automated testing of accessibility, server-side render and visual
      snapshots, </li>
      <li>good sense of design and UX,</li>
      <li>huge experience in almost all of the JS ecosystems, by having used in the past many libraries like Next.js, React,
      Redux, Redux-Observable,
      RxJS, Backbone, jQuery, Lodash/Underscore and many else.
    </li>
  </ul>

  <hr></hr>

  <h2 className="headers">
      <i className="fa fa-code"></i>Back-end Web development
  </h2>

  <p>
      <strong>In back-end development, current stack involves <a href="https://www.python.org/" rel="nofollow">Python</a> and <a href="https://www.djangoproject.com/" rel="nofollow">Django</a></strong>, and alternatively <a href="https://golang.org" rel="nofollow">Go </a> or 
        <a href="http://nodejs.org/" rel="nofollow"> NodeJS</a>.
  </p>
  <p>Nearly every app I have launched in the past had the back-end done also by me. In order to improve the development
    speed, performance and reliability, I have changed languages and frameworks already multiple times, from Java to Python
    and now to JavaScript & Go; and configured servers using just the shell, Docker and Kubernetes.
  </p>
  <p>
    The lessons I learned while doing all these apps will be useful for me forever, no
    matter what framework I will use in the next project.
  </p>

  <p>
    What I can do for you at that side is:
  </p>

  <ul>
      <li>lead development of backends in python</li>
      <li>splitting the back-end into separate domains and microservices,</li>
      <li>cooperation with APIs, remote data synchronizations, cloud servers, asynchronous workers,</li>
      <li>using different types of databases (like <a href="http://www.postgresql.org/" rel="nofollow">PostgreSQL</a>, <a
        href="http://www.mysql.com/" rel="nofollow">MySQL</a>, <a href="http://www.elasticsearch.org/"
        rel="nofollow">Elasticsearch</a>, <a href="http://redis.io/" rel="nofollow">Redis</a>)</li>
      <li>dividing the servers into different machine nodes / docker containers; database sharding; load balancing,
      </li>
      <li>refactoring existing applications, by improving code readibility, separating concerns into separate
      functions/classes/modules, taking the business logic out from your request/response layer into separate modules
      (<a href="https://en.wikipedia.org/wiki/Domain-driven_design" rel="nofollow">DDD</a>), and moving the app
      architecture into an event-based one
      </li>
      <li>writing unit and e2e tests
      </li>
  </ul>
  <hr></hr>

  <h2 className="headers">
    <i className="fa fa-terminal"></i>
    What about dev-ops, design, UI, project leadership, team mentorship ?
  </h2>

  <p><strong>During my time I have created and released tens of websites.</strong></p>

  <p>Thus, not only I have coded their back-end and front-end codebases, but often I also had to care about other things
    needed in a successful web application project:</p>

  <ul>
      <li>good planning of UI and thinking how it affects the UX;</li>
      <li>consistency in design and typography;</li>
      <li>Search Engine Optimization;</li>
      <li>launching, deployment and monitoring the app after the release;</li>
      <li>in cases where a good Project Manager was missing, fulfilling his role, in order to save the project from losing time on unneeded things.</li>
  </ul>

  <hr></hr>

  <p>
    If your initial thought is that I can’t be the best in everything, it's okay. Send the design job
    to someone else, and I will take care of all the code development, or whatever other role you see me best in.
  </p>

  <p>
    In cases when you already have an existing team, but
    you would still use some help, <Link replace to="/contact">contact me</Link> as well. I’ll fit in very quickly, I promise.
  </p>
</div>)
}

export default Skills

