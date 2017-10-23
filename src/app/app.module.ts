import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';

@NgModule({
	declarations: [
		AppComponent,
		ContentComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
