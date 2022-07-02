import React from 'react';

let CloseTab = ({ Id, DeleteTab }) => {
	return (
		<div class="closeTab" onClick={() => {DeleteTab(Id)}}>
			<ion-icon name="close-outline"></ion-icon>
		</div>
	);
};

export default CloseTab