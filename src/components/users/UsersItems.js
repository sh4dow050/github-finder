import React from 'react';
import { Link } from 'react-router-dom';

const UsersItems = (props) => {
	const { login, avatar_url, html_url } = props.user;

	return (
		<div className='card text-center'>
			<img
				src={avatar_url}
				alt=''
				className='round-img'
				style={{ width: '40px' }}
			/>
			<h3>{login}</h3>
			<Link to={`/user/${login}`}>
				<button className='btn btn-sm btn-dark my-1'>More</button>
			</Link>
		</div>
	);
};

export default UsersItems;
