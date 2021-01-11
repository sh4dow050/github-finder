import React from 'react';

export const Alert = ({ alert }) => {
	return (
		alert !== null && (
			<div className={`alert alert-${alert.type}`}>
				<i class='fa fa-info-circle' aria-hidden='true'>
					{alert.msg}
				</i>
			</div>
		)
	);
};

export default Alert;
