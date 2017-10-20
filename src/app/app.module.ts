import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { ReferencesComponent } from './references/references.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
	declarations: [
		AppComponent,
		ContentComponent,
		HomeComponent,
		ReferencesComponent,
		SidebarComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		RouterModule.forRoot([
			{ path: 'references', component: ReferencesComponent },
			{ path: 'home', component: HomeComponent },
			{ path: '', redirectTo: 'home', pathMatch: 'full' },
			{ path: '**', redirectTo: 'home', pathMatch: 'full' }
		])
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
