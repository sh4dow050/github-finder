import './App.css';
import React from 'react';
import NavBar, { Navbar } from './components/layout/Navbar';
import UsersItems from './components/users/UsersItems';

class App extends React.Component {
	render() {
		return (
			<nav className='App'>
				<Navbar />
				<UsersItems />
			</nav>
		);
	}
}

export default App;
