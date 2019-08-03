import React from 'react';

const Contact = ()=> {
    setTimeout(()=>{document.getElementsByClassName('App')[0].classList.remove('hidden')}, 0);
    return (
        <div className="main-section contact-section">
            <h1 className="main-title">Contact me</h1>
                <p>I am available for hire and open to any ideas of cooperation.</p>
                <div className="vcard">
                	<dl className="dl dl-vertical">
                		<dt>E-mail:</dt>
                	<dd>
                    	<a href="mailto:qusai.alfaki@gmail.com"><i className="icon fa
                            fa-envelope"></i> qusai.alfaki@gmail.com</a>
                	</dd>
                		<dt>&nbsp;
                	</dt>
                	<dd></dd>
                    <dt>LinkedIn:</dt>
                	<dd>
                		<a href="https://www.linkedin.com/in/qalfaki"><i className="icon fa fa-linkedin"></i> Qusai</a>
              		</dd>
            		<dt>Github:</dt>
            		<dd> <a href="http://github.com/512B"><i className="icon fa fa-github"></i> 512B</a> </dd>
            		<dt>Twitter:</dt>
            		<dd> <a href="https://twitter.com/QAlfaki"><i className="icon fa fa-twitter"></i> @QAlfaki</a>
            		</dd></dl>
            	</div>
      	</div>
    )
}

export default Contact

