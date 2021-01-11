import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
	state = {
		text: '',
	};

	static propTypes = {
		searchUsers: PropTypes.func.isRequired,
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();
		if (this.state.text === '') {
			this.props.setAlert('Please enter something', 'light');
		} else {
			this.props.searchUsers(this.state.text);
			this.setState({ text: '' });
		}
	};

	render() {
		return (
			<div>
				<form action='' className='form' onSubmit={this.onSubmit}>
					<input
						type='text'
						name='text'
						placeholder='Search...'
						value={this.state.text}
						onChange={this.onChange}
					/>
					<input
						type='submit'
						value='Search'
						className='btn btn-dark btn-block'
					/>
				</form>

				{this.props.showClear ? (
					<button
						className='btn btn-success btn-block'
						onClick={this.props.clearUsers}
					>
						Clear
					</button>
				) : null}
			</div>
		);
	}
}

export default Search;