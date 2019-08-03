import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar';
import routes from './routes';
const resume = routes.pop()

const App = (props) =>{
        return (
            <BrowserRouter>
                <Route {...resume} key={9082}/>
                <div className='App'>
                    <Sidebar/>
                    <main className="site-main">
                        <div className="site-main-inner">
                            { routes.map((route, key) => <Route {...route} key={key}/>) }
                        </div>
                    </main>
                </div>
            </BrowserRouter>
            );
    }

export default App;
