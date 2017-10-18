import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IMainpage } from "./mainpage";

@Injectable()
export class ContentService {

	private _contentUrl = './assets/content.json';

	constructor(private _http: HttpClient) { }

    getContent(): Observable<IMainpage[]> {
		return this._http.get<IMainpage[]>(this._contentUrl)
			.do(data => console.log('data load succesful'))
			.catch(this.handleError);
	}
	
	private handleError(err: HttpErrorResponse) {
		console.log(err.message);
		return Observable.throw(err.message);
	}
}