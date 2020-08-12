import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'

import BoardUser from './components/boards/User'
import BoardAdmin from './components/boards/Admin'
import BoardModerator from './components/boards/Moderator'

// Components
import Sidebar from './components/Sidebar'

function App() {
	return (
		<BrowserRouter>
			{/* Sidebar */}
			<Sidebar />

			{/* Switch components */}
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/profile" component={Profile} />
				<Route exact path="/user" component={BoardUser} />
				<Route exact path="/admin" component={BoardAdmin} />
				<Route exact path="/moderator" component={BoardModerator} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
