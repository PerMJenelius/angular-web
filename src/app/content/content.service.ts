import { Injectable } from "@angular/core";
import { IMainpage } from "./mainpage";

@Injectable()
export class ContentService {

    getContent(): IMainpage[]{

    return [
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
                "text": "When you need a shipment of lead delivered at 300 rounds per minute. Selling it is perfectly legal, of course."
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
                "pageName": "Black Belt in Amazing",
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
          }
        ]
    }
}