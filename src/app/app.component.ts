import { Component } from '@angular/core';
import { ContentService } from './content/content.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [ ContentService ]
})
export class AppComponent {
	pageTitle = 'Acme Inc. Ltd.';
	pageSubtitle = 'Product Management, Evolved';
	title = 'app';
}
