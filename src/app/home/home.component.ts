import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	header: string = 'Butts'
	text: string = 'Butts butts butts';

	constructor() { }

	ngOnInit() {
	}

}
