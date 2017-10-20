import { Component, OnInit, OnChanges } from '@angular/core';

import { ContentService } from './content/content.service';
import { IMainpage } from './content/mainpage';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
	pageTitle: string = 'Acme Inc. Ltd.';
	pageSubtitle: string = 'Product Development';
	contact = 
		{
			'Phone': '+46 736 69 57 20',
			'Email': 'per@jenelius.se'
		}
	
	activeLink: string = '0';

	ngOnChanges(): void {
		
	}

	clickedLink(id: string): void {
		var newLink = document.getElementById(id);
		newLink.setAttribute('style', 'background-color: rgba(0,0,0,0.4); color: rgba(240,240,240,1)');

		if( this.activeLink !== '0') {
			var oldLink = document.getElementById(this.activeLink);
			oldLink.setAttribute('style', 'background-color: default; color: default');
		}

		this.activeLink = id;
	}
}
