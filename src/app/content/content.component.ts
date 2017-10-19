import { Component, Input, OnInit, AfterViewInit } from "@angular/core";
import { ContentService } from "./content.service";

import { IMainpage } from "./mainpage";

@Component({
    selector: 'aw-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class ContentComponent implements AfterViewInit {

    @Input() contentHeader: string;
    @Input() contentText: string;

    contentHeight: number = 0;

	ngAfterViewInit(): void {
        var itemInfo = document.getElementById('itemInfo');
        var bottomBar = document.getElementById('bottombar');

        var itemHeight = itemInfo.getBoundingClientRect().height;
        var top = itemHeight + 190;

        bottomBar.setAttribute("style", "top:" + top + "px");
    }
}