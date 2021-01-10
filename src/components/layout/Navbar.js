import React from 'react';

const Navbar = (props) => {
	return (
		<div>
			<h1 className='navBav bg-primary'>
				<i class='fa fa-github' aria-hidden='true'></i> NavBar
			</h1>
		</div>
	);
};

// Navbar.defaultProps = {
//  title: 'GitHub Finder'
//   icon: 'fab fa-github'
// };

export default Navbar;
