import { Component } from "@angular/core";
import { IMainpage } from "./mainpage";
import { ContentService } from "./content.service";

@Component({
    selector: 'aw-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class Content {
    pageTitle = 'Acme Inc. Ltd.';
    pageSubtitle = 'Product Management, Evolved';
  
	//array för bildurl:er + captions
	//eller template per underitem?
    mainpages: IMainpage[] = [
      {
        "pageName": "Products",
        "subpages": [
          {
            "pageName": "Shovel",
            "text": "A pretty neat shovel with a wooden handle made of glass."
          },
          {
            "pageName": "Hammer",
            "text": "Stop! ...hammer time"
          },
          {
            "pageName": "Machine gun",
            "text": "When you need a shipment of lead delivered at 300 rounds per minute. All of this is perfectly legal, of course."
          },
          {
            "pageName": "Lathe",
            "text": "The perfect tool for making things round... or at least cylindrical."
          }
        ]
      },
      {
        "pageName": "Clients",
        "subpages": [
          {
            "pageName": "Kjell & Co.",
            "text": "The store for all your electronical needs."
          },
          {
            "pageName": "Kalle Anka & Co.",
            "text": "Donald is da man."
          },
          {
            "pageName": "Kamratposten",
            "text": "A good sufficient substitute for real friends."
          }
        ]
      },
      {
        "pageName": "Diplomas",
        "subpages": [
          {
            "pageName": "Degree of Amazing",
            "text": "From the University of Keeping it Real"
          },
          {
            "pageName": "Master of the Universe",
            "text": "Unlike that asshole, Skeletor."
          }
        ]
      },
      {
        "pageName": "News",
        "subpages": [
          {
            "pageName": "September",
            "text": "We are now only the second-to least manly website on the net."
          },
          {
            "pageName": "August",
            "text": "Now with 30% less suck."
          },
          {
            "pageName": "July",
            "text": "Some of our old stuff was found behind the radiator in accounting. I never trusted that Steve guy. Shhh..."
          },
          {
            "pageName": "June",
            "text": "We have a new website. Yay! Where is all our old stuff? Boo!"
          }
        ]
      },
    ];

    constructor(private _contentService: ContentService) {

    }

    ngOnInit(): void {
		this.mainpages = this._contentService.getContent();
    }

    activePage: number = 0;
    activeItem: number = 10;
    activeHeader: string;
    activeText: string;
  
    subpages: any[];
  
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