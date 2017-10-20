import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'aw-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	@Input() content: any[];

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
