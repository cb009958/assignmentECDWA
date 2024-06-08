import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AlbumList from './components/AlbumList';
import AlbumDetails from './components/AlbumDetails';
import AdminDashboard from './components/AdminDashboard';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={AlbumList} />
                    <Route path="/albums/:id" component={AlbumDetails} />
                    <Route path="/admin" component={AdminDashboard} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
