import React from 'react';
import AddTab from './AddTab';
import NewTab from './NewTab';

let TabList = ({ Tlist, clickOnTab, DeleteTab, AddNewTab }) => {
	return (
		<ul>
			{Tlist.map((el, id) => {
				let Name = el['Name'];
				let Icon = el['Icon'];
				let IsActive = el['Active'];
				let InPocket = el['InPocket'];
				return (
					<NewTab
						Id={id + 1}
						Name={Name}
						Icon={Icon}
						InPocket={InPocket}
						IsActive={IsActive}
						clickOnTab={clickOnTab}
						DeleteTab={DeleteTab}
					/>
				)
			})}
			<AddTab AddNewTab={AddNewTab}/>
		</ul>
	);
};

export default TabList