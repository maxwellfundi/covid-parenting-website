import { ViewportScroller } from '@angular/common';
import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
export interface MenuItem {
  name: string,
  href?: string,
  fragment?: string,
  subMenuItems?: MenuItem[],
  subMenuOpen?: boolean
};

//todo. this needs to be globalised
const MENU_ITEMS: MenuItem[] = [
  { name: "HOME", href: "/" },

  {
    name: "ABOUT US",
    href: "/aboutus",
    subMenuItems: [
      { name: "Partners & Funders", href: "/aboutus", fragment: "partners-funders" },
      { name: "Contributors", href: "/contributors" },
      { name: "Contact Us", href: "/aboutus", fragment: "contact" }
    ]
  },

  {
    name: "PARENTING",
    href: "/resources",
    subMenuItems: [
      { name: "Parenting Tips", href: "/tips" },
      { name: "WHO x Unicef Social Media campaign", href: "/whocampaign" },
      { name: "Social Media Kit #1", href: "/socialmedia" },
      { name: "Social Media Kit #2", href: "/socialmedia2" },
      { name: "Tips For Caseworkers", href: "/caseworkers" },
      { name: "Public Service Announcements", href: "/psa" },
      { name: "Digital Parenting", href: "/digitalparenting" },
      { name: "Audiovisual Resources", href: "/audiovisuals" },
      { name: "Faith-Based Resources", href: "/faithleaders" },
      { name: "Brand Guidelines", href: "/branding" },
      
      /*{
        name: "Radio Scripts",
        href: "/tips",
        fragment: "radio"
      },*/
    ]
  },

  {
    name: "IMPACT",
    href: "/impact",
    subMenuItems: [
      { name: "Global Impact", href: "/impact", fragment: "reach-by-region" },
      { name: "Reach by Dissemination Method", href: "/impact", fragment: "reach-by-dissemination" },
      { name: "Impact Stories", href: "/impactstories" },
      { name: "Champions of Children", href: "/impactchampions" },
      { name: "Impact Briefs", href: "/impactbriefs" },      
      { name: "Impact Map", href: "/impactmap" }
    ]
  },

  {
    name: "NEWS & MEDIA",
    href: "/news-main",
    subMenuItems: [
      { name: "Updates", href: "/news" },
      { name: "Newsletters", href: "/newsletters" },
      { name: "Press", href: "/press" },
      { name: "Publications", href: "/publications" },
      { name: "Webinars", href: "/webinars" },
      { name: "Podcasts", href: "/podcasts" }
    ]
  },

  {
    name: "TELL US WHAT YOU THINK",
    href: "/contactus",
    subMenuItems: [
      { name: "Parents Survey", href: "/contactus",  fragment: "parents-survey" },
     /* { name: "Champions of Children Survey", href: "/contactus" , fragment: "champions-of-children-survey"},*/
      { name: "Teens App Survey", href: "/contactus" , fragment: "teen-app-survey"},
      { name: "Contact Us", href: "/contactus" , fragment: "contact"},
    ]
  },
  {
    name: "Search",
    href: "/search"
  }
];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuDropdownOpen: boolean = false;
  searchDropdownOpen: boolean = false;
  menuItems = MENU_ITEMS;

  constructor(private viewportScroller: ViewportScroller, private renderer2: Renderer2, @Inject(DOCUMENT) private _document) { }

  ngOnInit(): void {
        const s = this.renderer2.createElement('script');
        s.type = 'text/javascript'
        s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        this.renderer2.appendChild(this._document.body, s);

        const v = this.renderer2.createElement('script');
        v.type = 'text/javascript';
        v.text = "function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element'); } ";
        this.renderer2.appendChild(this._document.body, v);
  }

translate(){
      console.log("translated")
    }
  mouseEnterMenuItem($event, item: MenuItem) {
    if (item.subMenuItems) {
      item.subMenuOpen = true;
    }
  }

  mouseLeaveMenuItem($event, item: MenuItem) {
    item.subMenuOpen = false;
  }

  scrollToFragment(fragment: string) {
    console.log("Scroll to fragment ", fragment);
    if (fragment && fragment.length > 0) {
      setTimeout(() => {
        this.viewportScroller.scrollToAnchor(fragment);
      }, 500);
    }
  }
}

