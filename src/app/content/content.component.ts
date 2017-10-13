import { Component, OnInit } from "@angular/core";
import { IMainpage } from "./mainpage";
import { ContentService } from "./content.service";

@Component({
    selector: 'aw-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class ContentComponent {
  
	//array för bildurl:er + captions
	//eller template per underitem?
    mainpages: IMainpage[] = [];

    constructor(private _contentService: ContentService) {

    }

    activePage: number = 0;
    activeItem: number = 10;
    activeHeader: string;
    activeText: string;
  
	subpages: any[];
	
	ngOnInit(): void {
		this.mainpages = this._contentService.getContent();
	}
	
    // slice pipe for subpages?
    showSubpages(pageNr: number): void {

        //hämta ut undersidor
        this.subpages = this.mainpages[pageNr].subpages;

        //styling av navigationen
        var oldPage = document.getElementById(this.activePage.toString());
        var pageTab = document.getElementById(pageNr.toString());
        oldPage.style.setProperty('background-color', '');
        pageTab.style.setProperty('background-color', 'rgba(0,0,0,0.5)');
        this.activePage = pageNr;
        this.activeItem = 10;
    }

    showItem(itemNr: number): void {

        //hämta ut rätt text
        var index = itemNr - 10;
        this.activeHeader = this.subpages[index].pageName;
        this.activeText = this.subpages[index].text;

        //styling av navigationen
        var oldTab = document.getElementById(this.activeItem.toString());
        var subTab = document.getElementById(itemNr.toString());
        oldTab.style.setProperty('background-color', '');
        subTab.style.setProperty('background-color','rgba(0,0,0,0.33)');
        this.activeItem = itemNr;
    }
}