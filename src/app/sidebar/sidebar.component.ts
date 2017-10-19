import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'aw-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
	menuItems: string[] = [
		'Bazooka',
		'Lathe',
		'Big spoon',
		'Hat',
		'Grenade',
		'Apple Basket',
		'Door'
	]

	constructor() { }

	ngOnInit() {
	}
}
