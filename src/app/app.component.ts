import { Component, OnInit } from '@angular/core';

import { ContentService } from './content/content.service';
import { IMainpage } from './content/mainpage';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [ ContentService ]
})
export class AppComponent implements OnInit {
	pageTitle: string = 'Acme Inc. Ltd.';
	pageSubtitle: string = 'Product Development';
	mainpages: any[];
    activePage: number = 0;
    activeItem: number = 10;
    activeHeader: string;
    activeText: string;
	subpages: any[];
    errorMessage: string;
	contact = 
		{
			'Phone': '+46 736 69 57 20',
			'Email': 'per@jenelius.se'
		}
	title = 'app';

	constructor(private _contentService: ContentService) { }
		
	ngOnInit(): void {
		this._contentService.getContent()
			.subscribe(mainpages => this.mainpages = mainpages,
			error => this.errorMessage = <any>error);
	}
}
