import { React, useState } from 'react';
import './App.css';
import TabList from './components/TabList';

let App = () => {
	// eslint-disable-next-line
	let [Tabs, setTabs] = useState([
		{'id': 1, 'Name': 'Profile', 'Icon': 'person-outline', 'InPocket': false, 'Active': true},
		{'id': 2, 'Name': 'Messages', 'Icon': 'chatbubbles-outline', 'InPocket': true, 'Active': false}
	]);

	let clickOnTab = (id) => {
		let clickTab = Tabs[id - 1];
		clickTab['Active'] = true;
		let otherTabs = Tabs.filter((tab, tabId) => tabId !== id - 1);
		otherTabs.map((tab) => {
			tab['Active'] = false;
			return tab;
		});
		console.log('clickOnTab:', Tabs);
		setTabs([...Tabs]);
	};

	let DeleteTab = (id) => {
		setTimeout(() => {
			let temp = Tabs.filter((tab, tabId) => tabId !== id - 1);
			temp[temp.length - 1]['Active'] = true;
			console.log('DeleteTab:', Tabs[id - 1]['Name']);
			setTabs(temp);
		}, 400);
	};

	let AddTab = () => {
		Tabs.map((tab) => {
			tab['Active'] = false;
			return tab;
		});
		let AddNewTab = {'id': Tabs.length + 1, 'Name': 'NewTab', 'Icon': 'add-outline', 'InPocket': null, 'Active': true};
		setTabs([...Tabs, AddNewTab]);
		console.log('AddTab:', Tabs);
	};

	return (
		<div className="App">
			<div className="navigation">
				<TabList Tlist={Tabs} clickOnTab={clickOnTab} DeleteTab={DeleteTab} AddNewTab={AddTab}/>
			</div>
		</div>
	);
};

export default App;
