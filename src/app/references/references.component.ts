import { Component, OnInit } from '@angular/core';

import { ContentService } from '../content/content.service';

@Component({
	selector: 'app-references',
	templateUrl: './references.component.html',
	styleUrls: ['./references.component.css'],
	providers: [ ContentService ]
})
export class ReferencesComponent implements OnInit {

	header: string = 'Products';
	text: string = 'Man oh man, we got lots of precious lootz for you!';

	content: any[] = [
		{
			"title": "Bazooka",
			"description": "A really neat gun. Sold for educational purposes only."
		},
		{
			"title": "Lathe",
			"description": "Good for making things round -er, cylindrical."
		}
	]

	constructor() { }

	ngOnInit() {
	}

}
