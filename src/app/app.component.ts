import { Component, OnInit, OnChanges } from '@angular/core';

import { ContentService } from './content/content.service';
import { IMainpage } from './content/mainpage';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [ ContentService ]
})
export class AppComponent {
	pageTitle: string = 'Acme Inc. Ltd.';
	pageSubtitle: string = 'Product Development';
	contact = 
		{
			'Phone': '+46 736 69 57 20',
			'Email': 'per@jenelius.se'
		}
	
	header: string;
	text: string;
	content: any[];

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

	oldLink: string = '0';

	onLinkClick(newLink: string): void {
		if( this.oldLink !== '0') {
			var oldTab = document.getElementById(this.oldLink);
			oldTab.setAttribute('style', 'background-color: default; color: default');
		}
		var newTab = document.getElementById(newLink);
		newTab.setAttribute('style', 'background-color: rgba(0,0,0,0.4); color: rgba(240,240,240,1)');
		this.oldLink = newLink;
	}
}
