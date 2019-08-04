import React from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar';
import routes from './routes';
const resume = routes.pop()

const App = (props) =>{
        return (
            <HashRouter>
                <Route {...resume} key={9082}/>
                <div className='App'>
                    <Sidebar/>
                    <main className="site-main">
                        <div className="site-main-inner">
                            { routes.map((route, key) => <Route basename={process.env.PUBLIC_URL } {...route} key={key}/>) }
                        </div>
                    </main>
                </div>
            </HashRouter>
            );
    }

export default App;
