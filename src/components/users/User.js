import React, { Component, Fragment, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import { Repos } from '../repos/Repos';
import { Link } from 'react-router-dom';

const User = ({ user, loading, repos, getUser, getRepos, match }) => {
	useEffect(() => {
		getUser(match.params.login);
		getRepos(match.params.login);
	}, []);

	const {
		name,
		avatar_url,
		location,
		bio,
		company,
		blog,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable,
	} = user;

	if (loading) return <Spinner />;

	return (
		<div>
			<Link to='/' className='btn btn-light'>
				Back To Search
			</Link>
			<div className='card grid-2'>
				<div className='all-center'>
					<img
						src={avatar_url}
						alt=''
						className='round-img'
						style={{ width: '150px' }}
					/>
					<h1>{name}</h1>
					<p>{location}</p>
				</div>
				<div>
					{bio ? <p>{bio}</p> : null}
					<a href={html_url} className='btn btn-dark my-1'>
						Visit Github Profile
					</a>
					<ul>
						<li>
							<strong>Username: {login}</strong>
						</li>

						<li>{company && <p>Company: {company}</p>}</li>
						<li>{blog && <p>Website: {blog}</p>}</li>
					</ul>
				</div>
			</div>
			<div className='card text-center'>
				<div className='badge badge-primary'>Followers: {followers}</div>
				<div className='badge badge-success'>following: {following}</div>
				<div className='badge badge-light'>Public Repos: {public_repos}</div>
				<div className='badge badge-dark'>Public Gists: {public_gists}</div>
			</div>
			<Repos repos={repos} />
		</div>
	);
};

export default User;
