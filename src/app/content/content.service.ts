import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IMainpage } from "./mainpage";

@Injectable()
export class ContentService {

	constructor(private _http: HttpClient) { }

	getContent(contentUrl: string): Observable<any> {
		return this._http.get<any>(contentUrl)
			.catch(this.handleError);
	}
	
	private handleError(err: HttpErrorResponse) {
		console.log(err.message);
		return Observable.throw(err.message);
	}
}