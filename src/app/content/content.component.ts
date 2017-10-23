import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
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
    @Input() contentID: string;
    @Input() content: any[];

    @Output() contentChanged: EventEmitter<string> = new EventEmitter<string>();

    ngOnInit(): void {
        this.contentChanged.emit(this.contentID);
    }
}