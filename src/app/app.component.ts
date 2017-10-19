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
	
	showSubpages(pageNr: number): void {

		//hämta ut undersidor
		this.subpages = this.mainpages[pageNr].subpages;

		//styling av navigationen
		var oldPage = document.getElementById(this.activePage.toString());
		var pageTab = document.getElementById(pageNr.toString());
		oldPage.style.setProperty('background-color', '');
		oldPage.style.setProperty('color', '');
		pageTab.style.setProperty('background-color', 'rgba(0,0,0,0.4)');
		pageTab.style.setProperty('color', 'rgba(240,240,240,1)');
		this.activePage = pageNr;
		this.activeItem = 10;
		this.activeText = null;
	}
}
