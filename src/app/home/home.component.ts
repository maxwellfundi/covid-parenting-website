import { Component, OnInit, ElementRef } from '@angular/core';
import { TipSheet } from '../tip-sheets/tip-sheets.model';
import { WebAnalyticsService } from '../web-analytics.service';
import { TipSheetService } from '../tip-sheets/tip-sheet.service';
import { AnimateHelper} from '../../app/utils/animateHelper'
import { ImpactService, ImpactSummary} from '../../app/impact/impact.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends AnimateHelper implements OnInit {

  title = 'Covid Parenting Website';

  public strCurrentDate: string = "";
  public arrRegionSummaries: ImpactSummary[] = [];
  public arrDisseminationSummaries: ImpactSummary[] = [];
  public totalRegionSummary: number = 0;
  public totalDisseminationSummary: number = 0;

  arrVisibleTipSheets: TipSheet[] = [];

  constructor(public webAnalyticsService: WebAnalyticsService, private tipSheetService: TipSheetService, private elem: ElementRef, private impactStoriesService: ImpactService) {
    super();
    this.fetchTipsheets();
    this.strCurrentDate = new Date().toLocaleDateString();
    impactStoriesService.fetchImpactSummaries().subscribe((impactsummaries) => {
      impactsummaries.forEach((impactsummary) => {
        if (impactsummary.impactType.toUpperCase() === "REGION") {
          this.arrRegionSummaries.push(impactsummary)
          this.totalRegionSummary = this.totalRegionSummary + impactsummary.impactNumber;
        } else {
          this.arrDisseminationSummaries.push(impactsummary)
          this.totalDisseminationSummary = this.totalDisseminationSummary + impactsummary.impactNumber;
        }
      });


     // HomeComponent.setAndAnimateNumberCounts(this.elem.nativeElement.querySelectorAll('.total-dissemination'), this.totalDisseminationSummary);
      HomeComponent.setAndAnimateNumberCounts(this.elem.nativeElement.querySelectorAll('.numbers-reach'), this.totalRegionSummary);

    });

  }

  ngOnInit(): void { }

  //event handler for tracking.
  public SendDownloadTipSheetsEvent() {
    this.webAnalyticsService.emitAnlayticsEvent("tipsheets_downloads", "downloads", "downloads");
  }
  

  private fetchTipsheets() {
    this.tipSheetService.getTipSheetsByTypeAndCode("1en").subscribe((tipSheets) => {
      this.arrVisibleTipSheets = [];
      let index: number;
      for (index = 0; index < tipSheets.length; index++) {
        //if (index === 5) {
          //break;
        //}//end if 
        this.arrVisibleTipSheets.push(tipSheets[index]);
      }//end for loop


    });
  }//end method



}
