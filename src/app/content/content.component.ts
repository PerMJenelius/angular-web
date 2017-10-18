import { Component, OnInit } from "@angular/core";
import { ContentService } from "./content.service";

import { IMainpage } from "./mainpage";

@Component({
    selector: 'aw-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

    activeItem: number = 10;
    activeHeader: string;
    activeText: string;
	subpages: any[];

	ngOnInit(): void {
        
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
        oldTab.style.setProperty('color', '');
        subTab.style.setProperty('background-color','rgba(0,0,0,0.33)');
        subTab.style.setProperty('color','rgba(240,240,240,1)');
        this.activeItem = itemNr;
    }
}