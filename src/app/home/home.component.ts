import { Component, OnInit } from '@angular/core';

import { ContentService } from '../content/content.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	providers: [ ContentService ]
})
export class HomeComponent implements OnInit {

	header: string;
	text: string;
	errorMessage: string;

	constructor(private _contentService: ContentService) { }
	
	ngOnInit(): void {
		this._contentService.getHomePage()
			.subscribe(home => {
				this.header = home.header,
				this.text = home.text
			},
			error => this.errorMessage = <any>error);
	}
}
