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
		this.loadContent('0');
	}

	contentUrl: string = './assets/home.json';

	loadContent(pageId: string): void {

		switch (pageId) {
			case '0': this.contentUrl = './assets/home.json'; break;
			case '1': this.contentUrl = './assets/projects.json'; break;
			case '2': this.contentUrl = './assets/references.json'; break;
			case '3': this.contentUrl = './assets/certificates.json'; break;
			case '4': this.contentUrl = './assets/news.json'; break;
		}
	
		this._contentService.getContent(this.contentUrl)
		.subscribe(content => {
			this.header = content.header,
			this.text = content.text,
			this.content = content.content
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
		
		this.loadContent(newLink);

		this.oldLink = newLink;
	}

	onItemClick(id: string) {
		// alert(this.content[id].title);
		this.header = this.content[id].title;
	}
}
