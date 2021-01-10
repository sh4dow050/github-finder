import React from 'react';

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
			<a href={html_url}>
				<button className='btn btn-sm btn-dark my-1'>More</button>
			</a>
		</div>
	);
};

export default UsersItems;
