import React, { Component } from 'react';

class UsersItems extends Component {
	state = {
		id: 'id',
		login: 'mojombo',
		avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
		html_url: 'https://github.com/mojombo',
	};

	render() {
		const { login, avatar_url, html_url } = this.state;

		return (
			<div className='card text-center'>
				<img
					src={avatar_url}
					alt=''
					className='round-img'
					style={{ width: '40px' }}
				/>
				<h3>{login}</h3>
				<a href={html_url}>
					<button className='btn btn-sm btn-dark my-1'>More</button>
				</a>
			</div>
		);
	}
}

export default UsersItems;
