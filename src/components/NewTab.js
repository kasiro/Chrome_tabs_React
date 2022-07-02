import React from 'react';
import CloseTab from './CloseTab';

let NewTab = ({ Id, Name, Icon, IsActive, InPocket, clickOnTab, DeleteTab }) => {
	var classes = ['list'];
	if (IsActive){
		classes.push('active');
	}
	if (InPocket instanceof Boolean) {
		let Poket = (InPocket ? <ion-icon name="file-tray"></ion-icon> : <ion-icon name="file-tray-outline"></ion-icon>);
	} else {
		let Poket = false;
	}
	// FIXME: При нажатии на удаление срабатывает, сначало удаление, а потом только клик по табу
	return (
		<li class={classes.join(' ')} onClick={() => {clickOnTab(Id)}}>
		  <b></b>
		  <b></b>
		  <a href={'#'+Name.toLowerCase()}>
			<span class="icon">
				{Poket ? Poket : ''}
			</span>
			<span className="icon">
				<ion-icon name={Icon}></ion-icon>
			</span>
			<span class="title">{Name}</span>
			<CloseTab Id={Id} DeleteTab={DeleteTab}/>
		  </a>
		</li>
	);
};

export default NewTab