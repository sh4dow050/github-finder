import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
	const [text, setText] = useState('');

	const onChange = (e) => {
		setText(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (text === '') {
			setAlert('Please enter something', 'light');
		} else {
			searchUsers(text);
			setText('');
		}
	};

	return (
		<div>
			<form className='form' onSubmit={onSubmit}>
				<input
					type='text'
					name='text'
					placeholder='Search...'
					value={text}
					onChange={onChange}
				/>
				<input
					type='submit'
					value='Search'
					className='btn btn-dark btn-block'
				/>
			</form>

			{showClear ? (
				<button className='btn btn-success btn-block' onClick={clearUsers}>
					Clear
				</button>
			) : null}
		</div>
	);
};

Search.propTypes = {
	searchUsers: PropTypes.func.isRequired,
};

export default Search;
