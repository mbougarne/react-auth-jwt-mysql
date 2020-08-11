import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

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
			</Switch>
		</BrowserRouter>
	);
}

export default App;
