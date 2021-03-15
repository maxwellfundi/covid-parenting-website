import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { ResourcesService } from './resources.service';
import * as AOS from 'aos';
import { ViewportScroller } from '@angular/common';
declare let gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //todo. possibly remove resources service after fixing laxy loading
  constructor(public router: Router, public resourcesService: ResourcesService,
    private activatedRoute: ActivatedRoute, private viewportScroller: ViewportScroller) {
    this.router.events.subscribe(event => {
      
      if (event instanceof NavigationEnd) {
        this.activatedRoute.fragment.subscribe((fragment) => {
          const navState = this.router.getCurrentNavigation().extras.state;
          const noScroll = navState && navState.noScroll ? true : false;
          if (fragment) {
            this.viewportScroller.scrollToAnchor(fragment);
          } else if (!noScroll) {
            this.viewportScroller.scrollToAnchor("top");
          }
        });
        
        gtag('config', 'UA-171116573-2',
          {
            'page_path': event.urlAfterRedirects
            //todo. we can add more parameter values here like page_title
          }
        );
      }
    }
    );
  }

  ngOnInit() {
    AOS.init();
  }

}
