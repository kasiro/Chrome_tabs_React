import React from 'react';

let AddTab = ({ AddNewTab }) => {
	return (
		<li class="add" onClick={AddNewTab}>
          <span class="icon">
            <ion-icon class="add-tab" name="add-outline"></ion-icon>
          </span>
        </li>
	);
};

export default AddTab