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

	contact = {
		'Phone': '+46 736 69 57 20',
		'Email': 'per@jenelius.se'
	}

	constructor(private _contentService: ContentService) { }
	
	ngOnInit(): void {
		this.loadContent('x');
	}

	content: any[];
	contentId: string = 'x';
	contentTitle: string;
	contentText: string;
	templateUrl: string;
	errorMessage: string;
	contentUrl: string = './assets/home.json';

	loadContent(pageId: string): void {

		switch (pageId) {
			case 'x': this.contentUrl = './assets/home.json'; break;
			case 'a': this.contentUrl = './assets/projects.json'; break;
			case 'b': this.contentUrl = './assets/references.json'; break;
			case 'c': this.contentUrl = './assets/certificates.json'; break;
			case 'd': this.contentUrl = './assets/news.json'; break;
		}
	
		this._contentService.getContent(this.contentUrl)
		.subscribe(content => 
			{this.content = content,
			this.contentTitle = content[0].title,
			this.contentText = content[0].text,
			this.templateUrl = content[0].templateUrl},
			error => this.errorMessage = <any>error);
	}

	oldLink: string = 'x';

	onLinkClick(newLink: string): void {

		if(newLink !== this.oldLink) {
			if (this.oldLink !== 'x') {
				var oldTab = document.getElementById(this.oldLink);
				oldTab.setAttribute('style', 'background-color: default; color: default');
			}
			if (newLink !== 'x') {
				var newTab = document.getElementById(newLink);
				newTab.setAttribute('style', 'background-color: rgba(0,0,0,0.4); color: rgba(240,240,240,1)');
			}
			this.loadContent(newLink);
			this.oldLink = newLink;
		}
	}

	oldId: string = '1';

	onItemClick(newId: string) {
		if(newId !== this.oldId) {
			this.contentTitle = this.content[+newId].title;
			this.contentText = this.content[+newId].text;
			this.templateUrl = this.content[+newId].templateUrl;

			var oldLine = document.getElementById(this.oldId);
			oldLine.setAttribute('style', 'background-color: default; color: default');

			var newLine = document.getElementById(newId);
			newLine.setAttribute('style', 'background-color: rgba(0,0,0,0.7); color: rgba(240,240,240,1)');

			this.oldId = newId;
		}
	}
}