import React from 'react';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom'
import Sidebar from './components/Sidebar';
import routes from './routes';
const resume = routes.pop()

const App = (props) =>{
        // <Route exact {...resume} key={9082}/>
        return (
            <HashRouter>
                <Switch>
                <div className='App'>
                    <Sidebar/>
                    <main className="site-main">
                        <div className="site-main-inner">
                           { routes.map((route, key) => <Route exact basename={process.env.PUBLIC_URL } {...route} key={key}/>) }
                        </div>
                    </main>
                </div>
                </Switch>
            </HashRouter>
            );
    }

export default App;
