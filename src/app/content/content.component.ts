import { Component, OnInit, Input } from "@angular/core";
import { ContentService } from "./content.service";

import { IMainpage } from "./mainpage";

@Component({
    selector: 'aw-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

    @Input() contentHeader: string;
    @Input() contentText: string;

	ngOnInit(): void {
        
    }
}