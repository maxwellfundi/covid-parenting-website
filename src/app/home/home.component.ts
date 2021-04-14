import { Component, OnInit } from '@angular/core';
import { TipSheet } from '../tip-sheets/tip-sheets.model';
import { WebAnalyticsService } from '../web-analytics.service';
import { TipSheetService } from '../tip-sheets/tip-sheet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Covid Parenting Website';
  public totalRegionSummary: number = 600000;


  arrVisibleTipSheets: TipSheet[] = [];

  constructor(public webAnalyticsService: WebAnalyticsService, private tipSheetService: TipSheetService) {
    this.fetchTipsheets();

  }

  ngOnInit(): void { }

  //event handler for tracking.
  public SendDownloadTipSheetsEvent() {
    this.webAnalyticsService.emitAnlayticsEvent("tipsheets_downloads", "downloads", "downloads");
  }
  

  private fetchTipsheets() {
    this.tipSheetService.getTipSheetsForLanguage("en").subscribe((tipSheets) => {
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
